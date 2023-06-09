import actions from "./setting/actions";
import mutations from "./setting/mutations";
import state from "./setting/state";
import productactions from "./products/actions";
import productmutations from "./products/mutations";
import productstate  from "./products/state";
export default {
  namespaced: true,
  actions,
  mutations,
	state: state,
	productactions,
	productmutations,
	productstate
  
};