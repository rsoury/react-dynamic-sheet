(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@/components/ActionSheet'), require('@/components/BottomSheet'), require('@/components/Modal')) :
	typeof define === 'function' && define.amd ? define(['exports', '@/components/ActionSheet', '@/components/BottomSheet', '@/components/Modal'], factory) :
	(global = global || self, factory(global.reactActionSheet = {}, global.ActionSheet, global.BottomSheet, global.Modal));
}(this, (function (exports, ActionSheet, BottomSheet, Modal) { 'use strict';

	ActionSheet = ActionSheet && Object.prototype.hasOwnProperty.call(ActionSheet, 'default') ? ActionSheet['default'] : ActionSheet;
	BottomSheet = BottomSheet && Object.prototype.hasOwnProperty.call(BottomSheet, 'default') ? BottomSheet['default'] : BottomSheet;
	Modal = Modal && Object.prototype.hasOwnProperty.call(Modal, 'default') ? Modal['default'] : Modal;



	exports.BottomSheet = BottomSheet;
	exports.Modal = Modal;
	exports.default = ActionSheet;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
