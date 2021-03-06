var smartgrid = require("smart-grid");
var settings = {
  outputStyle: "scss" /* less || scss || sass || styl */,
  columns: 12 /* number of grid columns */,
  offset: "30px" /* gutter width px || % || rem */,
  mobileFirst: false /* mobileFirst ? 'min-width' : 'max-width' */,
  container: {
    maxWidth: "1455px" /* max-width оn very large screen */,
    fields: "30px" /* side fields */,
  },
  breakPoints: {
    lg: {
      width: "1200px" /* -> @media (max-width: 1100px) */,
    },
    md: {
      width: "960px",
    },
    sm: {
      width: "780px",
      fields:
        "15px" /* set fields only if you want to change container.fields */,
    },
    xs: {
      width: "560px",
    },
  },
};

smartgrid("./src/assets/scss", settings);
