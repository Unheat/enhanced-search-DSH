import {test} from 'node:test'
import assert from 'node:assert/strict'
import {PaletteAggregator} from '../../src/client/aggregator.ts'
import type {PaletteItem} from '../../src/shared/contract.ts'

test('opt-in content search publishes after soft deadline, without blocking fast results', async () => {
 let finish: (items: PaletteItem[]) => void = () => {}
 const pending = new Promise<PaletteItem[]>(resolve => {finish=resolve})
 const aggregator = new PaletteAggregator({
   providers:[{id:'history',label:'History',availability:'ready',collect:()=>pending}],
   preferences:()=>({pins:{},frecency:{},glassIntensity:'soft',shortcut:'Cmd+K'}),softDeadlineMs:5,acceptLateResults:true,
 })
 await aggregator.setQueryImmediate('needle')
 assert.equal(aggregator.getState().failures[0]?.reason,'late')
 finish([{id:'hit',providerId:'history',kind:'conversation-hit',title:'needle',primary:{id:'open',title:'Open',run:()=>{}}}])
 await new Promise(resolve=>setImmediate(resolve))
 assert.equal(aggregator.getState().items[0]?.item.id,'hit')
 aggregator.dispose()
})
