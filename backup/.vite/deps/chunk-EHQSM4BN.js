import {
  dialogTitleClasses_default
} from "./chunk-ELPWGSOB.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_m_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_base,
  init_clsx_m,
  init_esm,
  init_extends,
  init_generateUtilityClass,
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

// node_modules/@mui/material/DialogContent/DialogContent.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx_m();
init_base();
init_styled();
init_useThemeProps();

// node_modules/@mui/material/DialogContent/dialogContentClasses.js
init_esm();
init_generateUtilityClass();
function getDialogContentUtilityClass(slot) {
  return generateUtilityClass("MuiDialogContent", slot);
}
var dialogContentClasses = generateUtilityClasses("MuiDialogContent", ["root", "dividers"]);
var dialogContentClasses_default = dialogContentClasses;

// node_modules/@mui/material/DialogContent/DialogContent.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "dividers"];
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    dividers
  } = ownerState;
  const slots = {
    root: ["root", dividers && "dividers"]
  };
  return composeClasses(slots, getDialogContentUtilityClass, classes);
};
var DialogContentRoot = styled_default("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.dividers && styles.dividers];
  }
})(({
  theme,
  ownerState
}) => _extends({
  flex: "1 1 auto",
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px"
}, ownerState.dividers ? {
  padding: "16px 24px",
  borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
} : {
  [`.${dialogTitleClasses_default.root} + &`]: {
    paddingTop: 0
  }
}));
var DialogContent = React.forwardRef(function DialogContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDialogContent"
  });
  const {
    className,
    dividers = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    dividers
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(DialogContentRoot, _extends({
    className: clsx_m_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? DialogContent.propTypes = {
  children: import_prop_types.default.node,
  classes: import_prop_types.default.object,
  className: import_prop_types.default.string,
  dividers: import_prop_types.default.bool,
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var DialogContent_default = DialogContent;

export {
  getDialogContentUtilityClass,
  dialogContentClasses_default,
  DialogContent_default
};
//# sourceMappingURL=chunk-EHQSM4BN.js.map