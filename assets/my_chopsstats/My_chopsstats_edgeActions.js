
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Ellipse2}","click",function(sym,e){sym.getSymbol("redbar4").play("start")
sym.getSymbol("greenbar2").play("start")
sym.getSymbol("yellowbar3").play("start")
sym.getSymbol("purplebar").play("start")});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'redbar'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1845,function(sym,e){sym.play("loop_point");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle2}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle2}","mouseout",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_red}","mousedown",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle2}","click",function(sym,e){sym.play("start");});
//Edge binding end
})("redbar");
//Edge symbol end:'redbar'

//=========================================================

//Edge symbol: 'greenbar'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1866,function(sym,e){sym.play("loop_point");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle2}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle2}","mouseout",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle2}","click",function(sym,e){sym.play("start");});
//Edge binding end
})("greenbar");
//Edge symbol end:'greenbar'

//=========================================================

//Edge symbol: 'yellowbar'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3447,function(sym,e){sym.play("loop");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle2Copy2}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle2Copy2}","mouseout",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle2Copy2}","click",function(sym,e){sym.play("start");});
//Edge binding end
})("yellowbar");
//Edge symbol end:'yellowbar'

//=========================================================

//Edge symbol: 'purplebar'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play("loop");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle2Copy3}","mouseover",function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle2Copy3}","mouseout",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle2Copy3}","click",function(sym,e){sym.play("start");});
//Edge binding end
})("purplebar");
//Edge symbol end:'purplebar'
})(jQuery,AdobeEdge,"EDGE-1290752");