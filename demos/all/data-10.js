var data = {"type":"app","index":10,"htmlFileName":"app-10.html","sources":[{"mode":"js","code":"/** React + MUI + mobx*/\nimport * as React from 'react';\nimport { render, Button } from './mui';\nimport { Vertical } from './gls';\n\n/** Field */\nimport { DisplayValue } from './displayValue';\nimport { SelectField } from './selectField';\n\n/** FieldState */\nimport { FieldState } from '../../index';\nconst fieldState = new FieldState<DisplayValue>({ display: 'Please select', value: '' })\n  .validators((val: DisplayValue) => !val.value.trim() && 'Value required');\n\nrender(() => <Vertical>\n  <SelectField\n    id=\"question\"\n    label=\"Type of vehicle\"\n    fieldState={fieldState}\n    displayValues={[\n      { display: 'Please select', value: '' },\n      { display: 'I drive a car', value: 'car' },\n      { display: 'I drive a truck', value: 'truck' },\n    ]}\n  />\n  <Button onClick={fieldState.validate}>Validate</Button>\n  <div>\n    {!!fieldState.value.value && <p>Current Field Display = {fieldState.value.display}</p>}\n    {!!fieldState.value.value && <p>Current Field Value = {fieldState.value.value}</p>}\n    {fieldState.hasError && <p>Current Field Error = {fieldState.error}</p>}\n  </div>\n</Vertical>);\n"}],"height":"300px","pageSubDirName":"all"}