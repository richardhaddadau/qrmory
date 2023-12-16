import {
  DialogContext_default
} from "./chunk-MDIOT67E.js";
import {
  getDialogTitleUtilityClass
} from "./chunk-ELPWGSOB.js";
import {
  Typography_default
} from "./chunk-TNRAA3VO.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_m_default,
  composeClasses,
  init_base,
  init_clsx_m,
  init_extends,
  init_objectWithoutPropertiesLoose,
  init_styled,
  init_useThemeProps,
  styled_default,
  useThemeProps2 as useThemeProps
} from "./chunk-NTSEXPRE.js";
import {
  require_prop_types
} from "./chunk-OMDJTQ4B.js";
import {
  require_jsx_runtime
} from "./chunk-CSWLMPXF.js";
import {
  require_react
} from "./chunk-RZWRR4P6.js";
import {
  __toESM
} from "./chunk-J43GMYXM.js";

// node_modules/@mui/material/DialogTitle/DialogTitle.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx_m();
init_base();
init_styled();
init_useThemeProps();
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "id"];
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getDialogTitleUtilityClass, classes);
};
var DialogTitleRoot = styled_default(Typography_default, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
});
var DialogTitle = React.forwardRef(function DialogTitle2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDialogTitle"
  });
  const {
    className,
    id: idProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const {
    titleId = idProp
  } = React.useContext(DialogContext_default);
  return (0, import_jsx_runtime.jsx)(DialogTitleRoot, _extends({
    component: "h2",
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref,
    variant: "h6",
    id: idProp != null ? idProp : titleId
  }, other));
});
true ? DialogTitle.propTypes = {
  children: import_prop_types.default.node,
  classes: import_prop_types.default.object,
  className: import_prop_types.default.string,
  id: import_prop_types.default.string,
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var DialogTitle_default = DialogTitle;

export {
  DialogTitle_default
};
//# sourceMappingURL=chunk-44WQRGY6.js.map
