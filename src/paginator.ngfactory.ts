import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './paginator';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/common/src/localization';
import * as import4 from '@angular/core/src/di/injector';
import * as import5 from '@angular/core/src/i18n/tokens';
import * as import6 from '@angular/core/src/change_detection/change_detection_util';
import * as import7 from '@angular/core/src/linker/view';
import * as import8 from '@angular/core/src/linker/view_utils';
import * as import9 from '@angular/core/src/render/api';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/view_type';
import * as import12 from '@angular/core/src/change_detection/constants';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import15 from '@angular/core/src/linker/view_container';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/common/src/directives/ng_class';
import * as import20 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import21 from '@angular/core/src/linker/template_ref';
import * as import22 from '@angular/common/src/directives/ng_for';
import * as import23 from '../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import24 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import25 from '@angular/common/src/directives/ng_if';
import * as import26 from '@angular/common/src/directives/ng_style';
class PaginatorModuleInjector extends import0.NgModuleInjector<import1.PaginatorModule> {
  _CommonModule_0:import2.CommonModule;
  _PaginatorModule_1:import1.PaginatorModule;
  __NgLocalization_2:import3.NgLocaleLocalization;
  constructor(parent:import4.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_2():import3.NgLocaleLocalization {
    if ((this.__NgLocalization_2 == null)) { (this.__NgLocalization_2 = new import3.NgLocaleLocalization(this.parent.get(import5.LOCALE_ID))); }
    return this.__NgLocalization_2;
  }
  createInternal():import1.PaginatorModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._PaginatorModule_1 = new import1.PaginatorModule();
    return this._PaginatorModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.PaginatorModule)) { return this._PaginatorModule_1; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const PaginatorModuleNgFactory:import0.NgModuleFactory<import1.PaginatorModule> = new import0.NgModuleFactory(PaginatorModuleInjector,import1.PaginatorModule);
export class Wrapper_Paginator {
  /*private*/ _eventHandler:Function;
  context:import1.Paginator;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  subscription0:any;
  constructor() {
    this._changed = false;
    this.context = new import1.Paginator();
    this._expr_0 = import6.UNINITIALIZED;
    this._expr_1 = import6.UNINITIALIZED;
    this._expr_2 = import6.UNINITIALIZED;
    this._expr_3 = import6.UNINITIALIZED;
    this._expr_4 = import6.UNINITIALIZED;
    this._expr_5 = import6.UNINITIALIZED;
    this._expr_6 = import6.UNINITIALIZED;
  }
  ngOnDetach(view:import7.AppView<any>,componentView:import7.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_pageLinkSize(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.pageLinkSize = currValue;
      this._expr_0 = currValue;
    }
  }
  check_style(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.style = currValue;
      this._expr_1 = currValue;
    }
  }
  check_styleClass(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.styleClass = currValue;
      this._expr_2 = currValue;
    }
  }
  check_rowsPerPageOptions(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.rowsPerPageOptions = currValue;
      this._expr_3 = currValue;
    }
  }
  check_totalRecords(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.totalRecords = currValue;
      this._expr_4 = currValue;
    }
  }
  check_first(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.first = currValue;
      this._expr_5 = currValue;
    }
  }
  check_rows(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import8.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.rows = currValue;
      this._expr_6 = currValue;
    }
  }
  ngDoCheck(view:import7.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import7.AppView<any>,componentView:import7.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import7.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.onPageChange.subscribe(_eventHandler.bind(view,'onPageChange'))); }
  }
}
var renderType_Paginator_Host:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{});
class View_Paginator_Host0 extends import7.AppView<any> {
  _el_0:any;
  compView_0:import7.AppView<import1.Paginator>;
  _Paginator_0_3:Wrapper_Paginator;
  constructor(viewUtils:import8.ViewUtils,parentView:import7.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Paginator_Host0,renderType_Paginator_Host,import11.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import8.selectOrCreateRenderHostElement(this.renderer,'ay-paginator',import8.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_Paginator0(this.viewUtils,this,0,this._el_0);
    this._Paginator_0_3 = new Wrapper_Paginator();
    this.compView_0.create(this._Paginator_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import13.ComponentRef_<any>(0,this,this._el_0,this._Paginator_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.Paginator) && (0 === requestNodeIndex))) { return this._Paginator_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Paginator_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._Paginator_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PaginatorNgFactory:import13.ComponentFactory<import1.Paginator> = new import13.ComponentFactory<import1.Paginator>('ay-paginator',View_Paginator_Host0,import1.Paginator);
const styles_Paginator:any[] = ([] as any[]);
class View_Paginator1 extends import7.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import14.Wrapper_NgClass;
  _text_1:any;
  _map_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import8.ViewUtils,parentView:import7.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import15.ViewContainer) {
    super(View_Paginator1,renderType_Paginator,import11.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_3 = import8.pureProxy1((p0:any):{[key: string]:any} => {
      return {'ui-state-active': p0};
    });
    this._expr_4 = import6.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import8.createRenderElement(this.renderer,(null as any),'a',new import8.InlineArray4(4,'class','ui-paginator-page ui-paginator-element ui-state-default ui-corner-all','href','#'),(null as any));
    this._NgClass_0_3 = new import14.Wrapper_NgClass(this.parentView.parentView.injectorGet(import16.IterableDiffers,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import17.KeyValueDiffers,this.parentView.parentIndex),new import18.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    var disposable_0:Function = import8.subscribeToRenderElement(this,this._el_0,new import8.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'ui-paginator-page ui-paginator-element ui-state-default ui-corner-all';
    this._NgClass_0_3.check_klass(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this._map_3(((this.context.$implicit - 1) == this.parentView.context.getPage()));
    this._NgClass_0_3.check_ngClass(currVal_0_0_1,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_4:any = import8.inlineInterpolate(1,'',this.context.$implicit,'');
    if (import8.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_1,currVal_4);
      this._expr_4 = currVal_4;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.changePage((this.context.$implicit - 1),$event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_Paginator3 extends import7.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import8.ViewUtils,parentView:import7.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import15.ViewContainer) {
    super(View_Paginator3,renderType_Paginator,import11.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import6.UNINITIALIZED;
    this._expr_3 = import6.UNINITIALIZED;
    this._expr_4 = import6.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import8.createRenderElement(this.renderer,(null as any),'option',import8.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this.context.$implicit;
    if (import8.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_0,'value',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = (this.parentView.parentView.context.rows == this.context.$implicit);
    if (import8.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_0,'selected',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = import8.inlineInterpolate(1,'',this.context.$implicit,'');
    if (import8.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setText(this._text_1,currVal_4);
      this._expr_4 = currVal_4;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_Paginator2 extends import7.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import15.ViewContainer;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import20.Wrapper_NgFor;
  _text_3:any;
  constructor(viewUtils:import8.ViewUtils,parentView:import7.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import15.ViewContainer) {
    super(View_Paginator2,renderType_Paginator,import11.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import8.createRenderElement(this.renderer,(null as any),'select',new import8.InlineArray2(2,'class','ui-paginator-rpp-options ui-widget ui-state-default'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import15.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import21.TemplateRef_(this,2,this._anchor_2);
    this._NgFor_2_6 = new import20.Wrapper_NgFor(this._vc_2.vcRef,this._TemplateRef_2_5,this.parentView.parentView.injectorGet(import16.IterableDiffers,this.parentView.parentIndex),this.parentView.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    var disposable_0:Function = import8.subscribeToRenderElement(this,this._el_0,new import8.InlineArray2(2,'change',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import22.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.parentView.context.rowsPerPageOptions;
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,false);
    this._NgFor_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import7.AppView<any> {
    if ((nodeIndex == 2)) { return new View_Paginator3(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'change')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onRppChange($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
var renderType_Paginator:import9.RenderComponentType = import8.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_Paginator,{});
export class View_Paginator0 extends import7.AppView<import1.Paginator> {
  _text_0:any;
  _el_1:any;
  _NgClass_1_3:import14.Wrapper_NgClass;
  _NgStyle_1_4:import23.Wrapper_NgStyle;
  _text_2:any;
  _el_3:any;
  _NgClass_3_3:import14.Wrapper_NgClass;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _NgClass_8_3:import14.Wrapper_NgClass;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _anchor_15:any;
  /*private*/ _vc_15:import15.ViewContainer;
  _TemplateRef_15_5:any;
  _NgFor_15_6:import20.Wrapper_NgFor;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _NgClass_18_3:import14.Wrapper_NgClass;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  _NgClass_23_3:import14.Wrapper_NgClass;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _text_27:any;
  _anchor_28:any;
  /*private*/ _vc_28:import15.ViewContainer;
  _TemplateRef_28_5:any;
  _NgIf_28_6:import24.Wrapper_NgIf;
  _text_29:any;
  _text_30:any;
  /*private*/ _expr_43:any;
  _map_44:any;
  /*private*/ _expr_45:any;
  _map_46:any;
  /*private*/ _expr_47:any;
  _map_48:any;
  /*private*/ _expr_49:any;
  _map_50:any;
  constructor(viewUtils:import8.ViewUtils,parentView:import7.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Paginator0,renderType_Paginator,import11.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import12.ChangeDetectorStatus.CheckAlways);
    this._expr_43 = import6.UNINITIALIZED;
    this._map_44 = import8.pureProxy1((p0:any):{[key: string]:any} => {
      return {'ui-state-disabled': p0};
    });
    this._expr_45 = import6.UNINITIALIZED;
    this._map_46 = import8.pureProxy1((p0:any):{[key: string]:any} => {
      return {'ui-state-disabled': p0};
    });
    this._expr_47 = import6.UNINITIALIZED;
    this._map_48 = import8.pureProxy1((p0:any):{[key: string]:any} => {
      return {'ui-state-disabled': p0};
    });
    this._expr_49 = import6.UNINITIALIZED;
    this._map_50 = import8.pureProxy1((p0:any):{[key: string]:any} => {
      return {'ui-state-disabled': p0};
    });
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = import8.createRenderElement(this.renderer,parentRenderNode,'div',import8.EMPTY_INLINE_ARRAY,(null as any));
    this._NgClass_1_3 = new import14.Wrapper_NgClass(this.parentView.injectorGet(import16.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import17.KeyValueDiffers,this.parentIndex),new import18.ElementRef(this._el_1),this.renderer);
    this._NgStyle_1_4 = new import23.Wrapper_NgStyle(this.parentView.injectorGet(import17.KeyValueDiffers,this.parentIndex),new import18.ElementRef(this._el_1),this.renderer);
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_3 = import8.createRenderElement(this.renderer,this._el_1,'a',new import8.InlineArray4(4,'class','ui-paginator-first ui-paginator-element ui-state-default ui-corner-all','href','#'),(null as any));
    this._NgClass_3_3 = new import14.Wrapper_NgClass(this.parentView.injectorGet(import16.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import17.KeyValueDiffers,this.parentIndex),new import18.ElementRef(this._el_3),this.renderer);
    this._text_4 = this.renderer.createText(this._el_3,'\n                ',(null as any));
    this._el_5 = import8.createRenderElement(this.renderer,this._el_3,'span',new import8.InlineArray2(2,'class','fa fa-step-backward'),(null as any));
    this._text_6 = this.renderer.createText(this._el_3,'\n            ',(null as any));
    this._text_7 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_8 = import8.createRenderElement(this.renderer,this._el_1,'a',new import8.InlineArray4(4,'class','ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all','href','#'),(null as any));
    this._NgClass_8_3 = new import14.Wrapper_NgClass(this.parentView.injectorGet(import16.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import17.KeyValueDiffers,this.parentIndex),new import18.ElementRef(this._el_8),this.renderer);
    this._text_9 = this.renderer.createText(this._el_8,'\n                ',(null as any));
    this._el_10 = import8.createRenderElement(this.renderer,this._el_8,'span',new import8.InlineArray2(2,'class','fa fa-backward'),(null as any));
    this._text_11 = this.renderer.createText(this._el_8,'\n            ',(null as any));
    this._text_12 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_13 = import8.createRenderElement(this.renderer,this._el_1,'span',new import8.InlineArray2(2,'class','ui-paginator-pages'),(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'\n                ',(null as any));
    this._anchor_15 = this.renderer.createTemplateAnchor(this._el_13,(null as any));
    this._vc_15 = new import15.ViewContainer(15,13,this,this._anchor_15);
    this._TemplateRef_15_5 = new import21.TemplateRef_(this,15,this._anchor_15);
    this._NgFor_15_6 = new import20.Wrapper_NgFor(this._vc_15.vcRef,this._TemplateRef_15_5,this.parentView.injectorGet(import16.IterableDiffers,this.parentIndex),this.ref);
    this._text_16 = this.renderer.createText(this._el_13,'\n            ',(null as any));
    this._text_17 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_18 = import8.createRenderElement(this.renderer,this._el_1,'a',new import8.InlineArray4(4,'class','ui-paginator-next ui-paginator-element ui-state-default ui-corner-all','href','#'),(null as any));
    this._NgClass_18_3 = new import14.Wrapper_NgClass(this.parentView.injectorGet(import16.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import17.KeyValueDiffers,this.parentIndex),new import18.ElementRef(this._el_18),this.renderer);
    this._text_19 = this.renderer.createText(this._el_18,'\n                ',(null as any));
    this._el_20 = import8.createRenderElement(this.renderer,this._el_18,'span',new import8.InlineArray2(2,'class','fa fa-forward'),(null as any));
    this._text_21 = this.renderer.createText(this._el_18,'\n            ',(null as any));
    this._text_22 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_23 = import8.createRenderElement(this.renderer,this._el_1,'a',new import8.InlineArray4(4,'class','ui-paginator-last ui-paginator-element ui-state-default ui-corner-all','href','#'),(null as any));
    this._NgClass_23_3 = new import14.Wrapper_NgClass(this.parentView.injectorGet(import16.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import17.KeyValueDiffers,this.parentIndex),new import18.ElementRef(this._el_23),this.renderer);
    this._text_24 = this.renderer.createText(this._el_23,'\n                ',(null as any));
    this._el_25 = import8.createRenderElement(this.renderer,this._el_23,'span',new import8.InlineArray2(2,'class','fa fa-step-forward'),(null as any));
    this._text_26 = this.renderer.createText(this._el_23,'\n            ',(null as any));
    this._text_27 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._anchor_28 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_28 = new import15.ViewContainer(28,1,this,this._anchor_28);
    this._TemplateRef_28_5 = new import21.TemplateRef_(this,28,this._anchor_28);
    this._NgIf_28_6 = new import24.Wrapper_NgIf(this._vc_28.vcRef,this._TemplateRef_28_5);
    this._text_29 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_30 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    var disposable_0:Function = import8.subscribeToRenderElement(this,this._el_3,new import8.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_3));
    var disposable_1:Function = import8.subscribeToRenderElement(this,this._el_8,new import8.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_8));
    var disposable_2:Function = import8.subscribeToRenderElement(this,this._el_18,new import8.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_18));
    var disposable_3:Function = import8.subscribeToRenderElement(this,this._el_23,new import8.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_23));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._anchor_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._text_27,
      this._anchor_28,
      this._text_29,
      this._text_30
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.NgClass) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._NgClass_3_3.context; }
    if (((token === import19.NgClass) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._NgClass_8_3.context; }
    if (((token === import21.TemplateRef) && (15 === requestNodeIndex))) { return this._TemplateRef_15_5; }
    if (((token === import22.NgFor) && (15 === requestNodeIndex))) { return this._NgFor_15_6.context; }
    if (((token === import19.NgClass) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._NgClass_18_3.context; }
    if (((token === import19.NgClass) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._NgClass_23_3.context; }
    if (((token === import21.TemplateRef) && (28 === requestNodeIndex))) { return this._TemplateRef_28_5; }
    if (((token === import25.NgIf) && (28 === requestNodeIndex))) { return this._NgIf_28_6.context; }
    if (((token === import19.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 29)))) { return this._NgClass_1_3.context; }
    if (((token === import26.NgStyle) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 29)))) { return this._NgStyle_1_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.styleClass;
    this._NgClass_1_3.check_klass(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = 'ui-paginator ui-widget ui-widget-header ui-unselectable-text';
    this._NgClass_1_3.check_ngClass(currVal_1_0_1,throwOnChange,false);
    this._NgClass_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    const currVal_1_1_0:any = this.context.style;
    this._NgStyle_1_4.check_ngStyle(currVal_1_1_0,throwOnChange,false);
    this._NgStyle_1_4.ngDoCheck(this,this._el_1,throwOnChange);
    const currVal_3_0_0:any = 'ui-paginator-first ui-paginator-element ui-state-default ui-corner-all';
    this._NgClass_3_3.check_klass(currVal_3_0_0,throwOnChange,false);
    const currVal_3_0_1:any = this._map_44(this.context.isFirstPage());
    this._NgClass_3_3.check_ngClass(currVal_3_0_1,throwOnChange,false);
    this._NgClass_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    const currVal_8_0_0:any = 'ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all';
    this._NgClass_8_3.check_klass(currVal_8_0_0,throwOnChange,false);
    const currVal_8_0_1:any = this._map_46(this.context.isFirstPage());
    this._NgClass_8_3.check_ngClass(currVal_8_0_1,throwOnChange,false);
    this._NgClass_8_3.ngDoCheck(this,this._el_8,throwOnChange);
    const currVal_15_0_0:any = this.context.pageLinks;
    this._NgFor_15_6.check_ngForOf(currVal_15_0_0,throwOnChange,false);
    this._NgFor_15_6.ngDoCheck(this,this._anchor_15,throwOnChange);
    const currVal_18_0_0:any = 'ui-paginator-next ui-paginator-element ui-state-default ui-corner-all';
    this._NgClass_18_3.check_klass(currVal_18_0_0,throwOnChange,false);
    const currVal_18_0_1:any = this._map_48(this.context.isLastPage());
    this._NgClass_18_3.check_ngClass(currVal_18_0_1,throwOnChange,false);
    this._NgClass_18_3.ngDoCheck(this,this._el_18,throwOnChange);
    const currVal_23_0_0:any = 'ui-paginator-last ui-paginator-element ui-state-default ui-corner-all';
    this._NgClass_23_3.check_klass(currVal_23_0_0,throwOnChange,false);
    const currVal_23_0_1:any = this._map_50(this.context.isLastPage());
    this._NgClass_23_3.check_ngClass(currVal_23_0_1,throwOnChange,false);
    this._NgClass_23_3.ngDoCheck(this,this._el_23,throwOnChange);
    const currVal_28_0_0:any = this.context.rowsPerPageOptions;
    this._NgIf_28_6.check_ngIf(currVal_28_0_0,throwOnChange,false);
    this._NgIf_28_6.ngDoCheck(this,this._anchor_28,throwOnChange);
    this._vc_15.detectChangesInNestedViews(throwOnChange);
    this._vc_28.detectChangesInNestedViews(throwOnChange);
    const currVal_43:any = (this.context.isFirstPage()? (0 - 1): (null as any));
    if (import8.checkBinding(throwOnChange,this._expr_43,currVal_43)) {
      this.renderer.setElementProperty(this._el_3,'tabIndex',currVal_43);
      this._expr_43 = currVal_43;
    }
    const currVal_45:any = (this.context.isFirstPage()? (0 - 1): (null as any));
    if (import8.checkBinding(throwOnChange,this._expr_45,currVal_45)) {
      this.renderer.setElementProperty(this._el_8,'tabIndex',currVal_45);
      this._expr_45 = currVal_45;
    }
    const currVal_47:any = (this.context.isLastPage()? (0 - 1): (null as any));
    if (import8.checkBinding(throwOnChange,this._expr_47,currVal_47)) {
      this.renderer.setElementProperty(this._el_18,'tabIndex',currVal_47);
      this._expr_47 = currVal_47;
    }
    const currVal_49:any = (this.context.isLastPage()? (0 - 1): (null as any));
    if (import8.checkBinding(throwOnChange,this._expr_49,currVal_49)) {
      this.renderer.setElementProperty(this._el_23,'tabIndex',currVal_49);
      this._expr_49 = currVal_49;
    }
  }
  destroyInternal():void {
    this._vc_15.destroyNestedViews();
    this._vc_28.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import7.AppView<any> {
    if ((nodeIndex == 15)) { return new View_Paginator1(this.viewUtils,this,15,this._anchor_15,this._vc_15); }
    if ((nodeIndex == 28)) { return new View_Paginator2(this.viewUtils,this,28,this._anchor_28,this._vc_28); }
    return (null as any);
  }
  handleEvent_3(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.changePageToFirst($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_8(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.changePageToPrev($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_18(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.changePageToNext($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_23(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.changePageToLast($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}