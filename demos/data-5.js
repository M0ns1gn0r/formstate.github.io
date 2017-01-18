var data = {"type":"app","index":5,"htmlFileName":"app-5.html","sources":[{"mode":"js","code":"/** React + MUI + mobx */\nimport * as React from 'react';\nimport { render, Button } from './mui';\nimport { observer } from 'mobx-react';\n\n/** Field */\nimport { FieldBlur } from './fieldBlur';\n\n/** FieldState */\nimport { FieldState, FormState } from '../../index';\n\nconst formState = new FormState({\n  foo: new FieldState({\n    value: '',\n    autoValidationEnabled: false,\n    validators: [(val) => val !== 'foo' && \"I only allow 'foo'\"]\n  }),\n  bar: new FieldState({\n    value: '',\n    autoValidationEnabled: false,\n    validators: [(val) => val !== 'bar' && \"I only allow 'bar'\"]\n  })\n})\nrender(() => <form onSubmit={async (e) => {\n  e.preventDefault();\n  const res = await formState.validate();\n  if (res.hasError) {\n    formState.enableAutoValidation();\n    return;\n  }\n  console.log('Validated Values:', formState.$.foo.$, formState.$.bar.$);\n}}>\n  <FieldBlur\n    id=\"first\"\n    label=\"foo is the value you are looking for\"\n    fieldState={formState.$.foo} />\n  <br />\n  <FieldBlur\n    id=\"second\"\n    label=\"Lets go to the bar\"\n    fieldState={formState.$.bar} />\n  <br />\n  <Button\n    type=\"submit\">\n    Click me to validate, or press enter in some input field.\n  </Button>\n</form>);\n"}],"height":"300px"}