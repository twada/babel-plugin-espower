'use strict';

var _powerAssertVisitorKeys = "{\"ArrayExpression\":[\"elements\"],\"AssignmentExpression\":[\"left\",\"right\"],\"BinaryExpression\":[\"left\",\"right\"],\"InterpreterDirective\":[],\"Directive\":[\"value\"],\"DirectiveLiteral\":[],\"BlockStatement\":[\"directives\",\"body\"],\"BreakStatement\":[\"label\"],\"CallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"CatchClause\":[\"param\",\"body\"],\"ConditionalExpression\":[\"test\",\"consequent\",\"alternate\"],\"ContinueStatement\":[\"label\"],\"DebuggerStatement\":[],\"DoWhileStatement\":[\"test\",\"body\"],\"EmptyStatement\":[],\"ExpressionStatement\":[\"expression\"],\"File\":[\"program\"],\"ForInStatement\":[\"left\",\"right\",\"body\"],\"ForStatement\":[\"init\",\"test\",\"update\",\"body\"],\"FunctionDeclaration\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"FunctionExpression\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"Identifier\":[\"typeAnnotation\"],\"IfStatement\":[\"test\",\"consequent\",\"alternate\"],\"LabeledStatement\":[\"label\",\"body\"],\"StringLiteral\":[],\"NumericLiteral\":[],\"NullLiteral\":[],\"BooleanLiteral\":[],\"RegExpLiteral\":[],\"LogicalExpression\":[\"left\",\"right\"],\"MemberExpression\":[\"object\",\"property\"],\"NewExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"Program\":[\"directives\",\"body\"],\"ObjectExpression\":[\"properties\"],\"ObjectMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectProperty\":[\"key\",\"value\",\"decorators\"],\"RestElement\":[\"argument\",\"typeAnnotation\"],\"ReturnStatement\":[\"argument\"],\"SequenceExpression\":[\"expressions\"],\"SwitchCase\":[\"test\",\"consequent\"],\"SwitchStatement\":[\"discriminant\",\"cases\"],\"ThisExpression\":[],\"ThrowStatement\":[\"argument\"],\"TryStatement\":[\"block\",\"handler\",\"finalizer\"],\"UnaryExpression\":[\"argument\"],\"UpdateExpression\":[\"argument\"],\"VariableDeclaration\":[\"declarations\"],\"VariableDeclarator\":[\"id\",\"init\"],\"WhileStatement\":[\"test\",\"body\"],\"WithStatement\":[\"object\",\"body\"],\"AssignmentPattern\":[\"left\",\"right\"],\"ArrayPattern\":[\"elements\",\"typeAnnotation\"],\"ArrowFunctionExpression\":[\"params\",\"body\",\"returnType\",\"typeParameters\"],\"ClassBody\":[\"body\"],\"ClassDeclaration\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ClassExpression\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ExportAllDeclaration\":[\"source\"],\"ExportDefaultDeclaration\":[\"declaration\"],\"ExportNamedDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"ExportSpecifier\":[\"local\",\"exported\"],\"ForOfStatement\":[\"left\",\"right\",\"body\"],\"ImportDeclaration\":[\"specifiers\",\"source\"],\"ImportDefaultSpecifier\":[\"local\"],\"ImportNamespaceSpecifier\":[\"local\"],\"ImportSpecifier\":[\"local\",\"imported\"],\"MetaProperty\":[\"meta\",\"property\"],\"ClassMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectPattern\":[\"properties\",\"typeAnnotation\"],\"SpreadElement\":[\"argument\"],\"Super\":[],\"TaggedTemplateExpression\":[\"tag\",\"quasi\"],\"TemplateElement\":[],\"TemplateLiteral\":[\"quasis\",\"expressions\"],\"YieldExpression\":[\"argument\"],\"AnyTypeAnnotation\":[],\"ArrayTypeAnnotation\":[\"elementType\"],\"BooleanTypeAnnotation\":[],\"BooleanLiteralTypeAnnotation\":[],\"NullLiteralTypeAnnotation\":[],\"ClassImplements\":[\"id\",\"typeParameters\"],\"DeclareClass\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareFunction\":[\"id\"],\"DeclareInterface\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareModule\":[\"id\",\"body\"],\"DeclareModuleExports\":[\"typeAnnotation\"],\"DeclareTypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"DeclareOpaqueType\":[\"id\",\"typeParameters\",\"supertype\"],\"DeclareVariable\":[\"id\"],\"DeclareExportDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"DeclareExportAllDeclaration\":[\"source\"],\"DeclaredPredicate\":[\"value\"],\"ExistsTypeAnnotation\":[],\"FunctionTypeAnnotation\":[\"typeParameters\",\"params\",\"rest\",\"returnType\"],\"FunctionTypeParam\":[\"name\",\"typeAnnotation\"],\"GenericTypeAnnotation\":[\"id\",\"typeParameters\"],\"InferredPredicate\":[],\"InterfaceExtends\":[\"id\",\"typeParameters\"],\"InterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"InterfaceTypeAnnotation\":[\"extends\",\"body\"],\"IntersectionTypeAnnotation\":[\"types\"],\"MixedTypeAnnotation\":[],\"EmptyTypeAnnotation\":[],\"NullableTypeAnnotation\":[\"typeAnnotation\"],\"NumberLiteralTypeAnnotation\":[],\"NumberTypeAnnotation\":[],\"ObjectTypeAnnotation\":[\"properties\",\"indexers\",\"callProperties\",\"internalSlots\"],\"ObjectTypeInternalSlot\":[\"id\",\"value\",\"optional\",\"static\",\"method\"],\"ObjectTypeCallProperty\":[\"value\"],\"ObjectTypeIndexer\":[\"id\",\"key\",\"value\",\"variance\"],\"ObjectTypeProperty\":[\"key\",\"value\",\"variance\"],\"ObjectTypeSpreadProperty\":[\"argument\"],\"OpaqueType\":[\"id\",\"typeParameters\",\"supertype\",\"impltype\"],\"QualifiedTypeIdentifier\":[\"id\",\"qualification\"],\"StringLiteralTypeAnnotation\":[],\"StringTypeAnnotation\":[],\"ThisTypeAnnotation\":[],\"TupleTypeAnnotation\":[\"types\"],\"TypeofTypeAnnotation\":[\"argument\"],\"TypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"TypeAnnotation\":[\"typeAnnotation\"],\"TypeCastExpression\":[\"expression\",\"typeAnnotation\"],\"TypeParameter\":[\"bound\",\"default\",\"variance\"],\"TypeParameterDeclaration\":[\"params\"],\"TypeParameterInstantiation\":[\"params\"],\"UnionTypeAnnotation\":[\"types\"],\"Variance\":[],\"VoidTypeAnnotation\":[],\"JSXAttribute\":[\"name\",\"value\"],\"JSXClosingElement\":[\"name\"],\"JSXElement\":[\"openingElement\",\"children\",\"closingElement\"],\"JSXEmptyExpression\":[],\"JSXExpressionContainer\":[\"expression\"],\"JSXSpreadChild\":[\"expression\"],\"JSXIdentifier\":[],\"JSXMemberExpression\":[\"object\",\"property\"],\"JSXNamespacedName\":[\"namespace\",\"name\"],\"JSXOpeningElement\":[\"name\",\"attributes\"],\"JSXSpreadAttribute\":[\"argument\"],\"JSXText\":[],\"JSXFragment\":[\"openingFragment\",\"children\",\"closingFragment\"],\"JSXOpeningFragment\":[],\"JSXClosingFragment\":[],\"Noop\":[],\"ParenthesizedExpression\":[\"expression\"],\"AwaitExpression\":[\"argument\"],\"BindExpression\":[\"object\",\"callee\"],\"ClassProperty\":[\"key\",\"value\",\"typeAnnotation\",\"decorators\"],\"OptionalMemberExpression\":[\"object\",\"property\"],\"PipelineTopicExpression\":[\"expression\"],\"PipelineBareFunction\":[\"callee\"],\"PipelinePrimaryTopicReference\":[],\"OptionalCallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"ClassPrivateProperty\":[\"key\",\"value\"],\"ClassPrivateMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"Import\":[],\"Decorator\":[\"expression\"],\"DoExpression\":[\"body\"],\"ExportDefaultSpecifier\":[\"exported\"],\"ExportNamespaceSpecifier\":[\"exported\"],\"PrivateName\":[\"id\"],\"BigIntLiteral\":[],\"TSParameterProperty\":[\"parameter\"],\"TSDeclareFunction\":[\"id\",\"typeParameters\",\"params\",\"returnType\"],\"TSDeclareMethod\":[\"decorators\",\"key\",\"typeParameters\",\"params\",\"returnType\"],\"TSQualifiedName\":[\"left\",\"right\"],\"TSCallSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSConstructSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSPropertySignature\":[\"key\",\"typeAnnotation\",\"initializer\"],\"TSMethodSignature\":[\"key\",\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSIndexSignature\":[\"parameters\",\"typeAnnotation\"],\"TSAnyKeyword\":[],\"TSUnknownKeyword\":[],\"TSNumberKeyword\":[],\"TSObjectKeyword\":[],\"TSBooleanKeyword\":[],\"TSStringKeyword\":[],\"TSSymbolKeyword\":[],\"TSVoidKeyword\":[],\"TSUndefinedKeyword\":[],\"TSNullKeyword\":[],\"TSNeverKeyword\":[],\"TSThisType\":[],\"TSFunctionType\":[\"typeParameters\",\"typeAnnotation\"],\"TSConstructorType\":[\"typeParameters\",\"typeAnnotation\"],\"TSTypeReference\":[\"typeName\",\"typeParameters\"],\"TSTypePredicate\":[\"parameterName\",\"typeAnnotation\"],\"TSTypeQuery\":[\"exprName\"],\"TSTypeLiteral\":[\"members\"],\"TSArrayType\":[\"elementType\"],\"TSTupleType\":[\"elementTypes\"],\"TSOptionalType\":[\"typeAnnotation\"],\"TSRestType\":[\"typeAnnotation\"],\"TSUnionType\":[\"types\"],\"TSIntersectionType\":[\"types\"],\"TSConditionalType\":[\"checkType\",\"extendsType\",\"trueType\",\"falseType\"],\"TSInferType\":[\"typeParameter\"],\"TSParenthesizedType\":[\"typeAnnotation\"],\"TSTypeOperator\":[\"typeAnnotation\"],\"TSIndexedAccessType\":[\"objectType\",\"indexType\"],\"TSMappedType\":[\"typeParameter\",\"typeAnnotation\"],\"TSLiteralType\":[\"literal\"],\"TSExpressionWithTypeArguments\":[\"expression\",\"typeParameters\"],\"TSInterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"TSInterfaceBody\":[\"body\"],\"TSTypeAliasDeclaration\":[\"id\",\"typeParameters\",\"typeAnnotation\"],\"TSAsExpression\":[\"expression\",\"typeAnnotation\"],\"TSTypeAssertion\":[\"typeAnnotation\",\"expression\"],\"TSEnumDeclaration\":[\"id\",\"members\"],\"TSEnumMember\":[\"id\",\"initializer\"],\"TSModuleDeclaration\":[\"id\",\"body\"],\"TSModuleBlock\":[\"body\"],\"TSImportEqualsDeclaration\":[\"id\",\"moduleReference\"],\"TSExternalModuleReference\":[\"expression\"],\"TSNonNullExpression\":[\"expression\"],\"TSExportAssignment\":[\"expression\"],\"TSNamespaceExportDeclaration\":[\"id\"],\"TSTypeAnnotation\":[\"typeAnnotation\"],\"TSTypeParameterInstantiation\":[\"params\"],\"TSTypeParameterDeclaration\":[\"params\"],\"TSTypeParameter\":[\"constraint\",\"default\"]}",
    _powerAssertConfig = ["assert(value, [message])", "assert.ok(value, [message])", "assert.equal(actual, expected, [message])", "assert.notEqual(actual, expected, [message])", "assert.strictEqual(actual, expected, [message])", "assert.notStrictEqual(actual, expected, [message])", { pattern: "assert.deepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.deepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.notDeepStrictEqual(actual, expected, [message])", args: [{ name: "actual", options: { depth: 2 } }, { name: "expected", options: { depth: 2 } }, { name: "[message]", message: true }] }, { pattern: "assert.throws(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotThrow(fn, [error], [message])", args: [{ name: "fn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.rejects(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }, { pattern: "assert.doesNotReject(asyncFn, [error], [message])", args: [{ name: "asyncFn", block: true }, { name: "[error]" }, { name: "[message]", message: true }] }],
    _am = {
  content: "assert(foo.bar)",
  filepath: "test/fixtures/MemberExpression/fixture.js",
  line: 3,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[7,10]},\"property\":{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[11,14]},\"computed\":false,\"range\":[7,14]}],\"range\":[0,15]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[7,10]},{\"type\":{\"label\":\".\"},\"range\":[10,11]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[11,14]},{\"type\":{\"label\":\")\"},\"range\":[14,15]}]",
  visitorKeys: _powerAssertVisitorKeys
},
    _ArgumentRecorder = function () { function ArgumentRecorder(callee, am, ag) { this._callee = callee; this._metadata = am; this._argDef = ag; this._logs = []; this._recorded = null; this._value = null; this._isBlock = false; if (am.config) { var argconf = am.config.args[ag.index]; this._isBlock = !!argconf.block; } } ArgumentRecorder.prototype.metadata = function metadata() { return this._metadata; }; ArgumentRecorder.prototype.code = function code() { return this._argDef.code; }; ArgumentRecorder.prototype.value = function value() { return this._value; }; ArgumentRecorder.prototype._tap = function _tap(value, espath) { this._logs.push({ value: wrap(value), espath: espath }); return value; }; ArgumentRecorder.prototype._rec = function _rec(value, espath) { var log = { value: wrap(value), espath: espath }; this._logs.push(log); if (this._isBlock && this._callee && this._callee._empowered && typeof value === 'function') { value = new Proxy(value, { apply: function apply(target, thisArg, argumentsList) { var ret; try { ret = target.apply(thisArg, argumentsList); log.value = wrap(ret); } catch (e) { log.value = e; throw e; } return ret; } }); } this._value = value; this._recorded = { value: value, logs: [].concat(this._logs) }; this._logs = []; if (this._callee && this._callee._empowered) { return this; } else { return value; } }; ArgumentRecorder.prototype.eject = function eject() { var result = this._recorded; this._recorded = null; this._value = null; return result; }; function isPromiseLike(o) { return o !== null && _typeof(o) === 'object' && typeof o.then === 'function' && typeof o.catch === 'function'; } function $Promise$(prms) { this.status = 'pending'; prms.then(mark(this, 'resolved'), mark(this, 'rejected')); } function mark(_this, s) { return function () { var args = Array.prototype.slice.apply(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; } function wrap(v) { return isPromiseLike(v) ? new $Promise$(v) : v; } return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert, _am, {
  espath: "arguments/0",
  code: "foo.bar",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _AssertionMessage = function () { function AssertionMessage(argRecs, metadata, message) { this._argRecs = argRecs; this._metadata = metadata; this._message = message; } AssertionMessage.prototype.value = function value() { if (this._message && typeof this._message.value === 'function') { return this._message.value(); } else { return this._message; } }; AssertionMessage.prototype.eject = function eject() { if (this._message && typeof this._message.eject === 'function') { return this._message.eject(); } else { return { value: this.value(), logs: [] }; } }; AssertionMessage.prototype.toString = function toString() { var message = this._message ? this._message : ''; message += '\n----------'; message += '\n  code: ' + this._metadata.content; message += '\n  line: ' + this._metadata.filepath + ':' + this._metadata.line; var argRec; for (var i = 0; i < this._argRecs.length; i += 1) { argRec = this._argRecs[i]; message += '\n  arg' + i + ': '; message += '\n    code: ' + argRec.code(); message += '\n    value: ' + argRec.value(); message += '\n    type: ' + _typeof(argRec.value()); } message += '\n'; message += '[NOTICE] configure power-assert for more verbose report. see: https://github.com/power-assert-js/power-assert'; message += '\n----------'; return message; }; return AssertionMessage; }(),
    _am2 = {
  content: "assert(foo.bar.baz)",
  filepath: "test/fixtures/MemberExpression/fixture.js",
  line: 5,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"MemberExpression\",\"object\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[7,10]},\"property\":{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[11,14]},\"computed\":false,\"range\":[7,14]},\"property\":{\"type\":\"Identifier\",\"name\":\"baz\",\"range\":[15,18]},\"computed\":false,\"range\":[7,18]}],\"range\":[0,19]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[7,10]},{\"type\":{\"label\":\".\"},\"range\":[10,11]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[11,14]},{\"type\":{\"label\":\".\"},\"range\":[14,15]},{\"type\":{\"label\":\"name\"},\"value\":\"baz\",\"range\":[15,18]},{\"type\":{\"label\":\")\"},\"range\":[18,19]}]",
  visitorKeys: _powerAssertVisitorKeys
},
    _ag2 = new _ArgumentRecorder(assert, _am2, {
  espath: "arguments/0",
  code: "foo.bar.baz",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am3 = {
  content: "assert(foo['bar'])",
  filepath: "test/fixtures/MemberExpression/fixture.js",
  line: 7,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[7,10]},\"property\":{\"type\":\"StringLiteral\",\"value\":\"bar\",\"range\":[11,16]},\"computed\":true,\"range\":[7,17]}],\"range\":[0,18]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[7,10]},{\"type\":{\"label\":\"[\"},\"range\":[10,11]},{\"type\":{\"label\":\"string\"},\"value\":\"bar\",\"range\":[11,16]},{\"type\":{\"label\":\"]\"},\"range\":[16,17]},{\"type\":{\"label\":\")\"},\"range\":[17,18]}]",
  visitorKeys: _powerAssertVisitorKeys
},
    _ag3 = new _ArgumentRecorder(assert, _am3, {
  espath: "arguments/0",
  code: "foo['bar']",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am4 = {
  content: "assert(foo[propName])",
  filepath: "test/fixtures/MemberExpression/fixture.js",
  line: 9,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[7,10]},\"property\":{\"type\":\"Identifier\",\"name\":\"propName\",\"range\":[11,19]},\"computed\":true,\"range\":[7,20]}],\"range\":[0,21]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[7,10]},{\"type\":{\"label\":\"[\"},\"range\":[10,11]},{\"type\":{\"label\":\"name\"},\"value\":\"propName\",\"range\":[11,19]},{\"type\":{\"label\":\"]\"},\"range\":[19,20]},{\"type\":{\"label\":\")\"},\"range\":[20,21]}]",
  visitorKeys: _powerAssertVisitorKeys
},
    _ag4 = new _ArgumentRecorder(assert, _am4, {
  espath: "arguments/0",
  code: "foo[propName]",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am5 = {
  content: "assert(foo[propName])",
  filepath: "test/fixtures/MemberExpression/fixture.js",
  line: 11,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[7,10]},\"property\":{\"type\":\"Identifier\",\"name\":\"propName\",\"range\":[11,19]},\"computed\":true,\"range\":[7,20]}],\"range\":[0,21]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[7,10]},{\"type\":{\"label\":\"[\"},\"range\":[10,11]},{\"type\":{\"label\":\"name\"},\"value\":\"propName\",\"range\":[11,19]},{\"type\":{\"label\":\"]\"},\"range\":[19,20]},{\"type\":{\"label\":\")\"},\"range\":[20,21]}]",
  visitorKeys: _powerAssertVisitorKeys
},
    _ag5 = new _ArgumentRecorder(assert, _am5, {
  espath: "arguments/0",
  code: "foo[propName]",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am6 = {
  content: "assert(foo[func(key)])",
  filepath: "test/fixtures/MemberExpression/fixture.js",
  line: 13,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[7,10]},\"property\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"func\",\"range\":[11,15]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"key\",\"range\":[16,19]}],\"range\":[11,20]},\"computed\":true,\"range\":[7,21]}],\"range\":[0,22]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[7,10]},{\"type\":{\"label\":\"[\"},\"range\":[10,11]},{\"type\":{\"label\":\"name\"},\"value\":\"func\",\"range\":[11,15]},{\"type\":{\"label\":\"(\"},\"range\":[15,16]},{\"type\":{\"label\":\"name\"},\"value\":\"key\",\"range\":[16,19]},{\"type\":{\"label\":\")\"},\"range\":[19,20]},{\"type\":{\"label\":\"]\"},\"range\":[20,21]},{\"type\":{\"label\":\")\"},\"range\":[21,22]}]",
  visitorKeys: _powerAssertVisitorKeys
},
    _ag6 = new _ArgumentRecorder(assert, _am6, {
  espath: "arguments/0",
  code: "foo[func(key)]",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am7 = {
  content: "assert(foo[propName]['key'][keys()['name']])",
  filepath: "test/fixtures/MemberExpression/fixture.js",
  line: 15,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"MemberExpression\",\"object\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[7,10]},\"property\":{\"type\":\"Identifier\",\"name\":\"propName\",\"range\":[11,19]},\"computed\":true,\"range\":[7,20]},\"property\":{\"type\":\"StringLiteral\",\"value\":\"key\",\"range\":[21,26]},\"computed\":true,\"range\":[7,27]},\"property\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"keys\",\"range\":[28,32]},\"arguments\":[],\"range\":[28,34]},\"property\":{\"type\":\"StringLiteral\",\"value\":\"name\",\"range\":[35,41]},\"computed\":true,\"range\":[28,42]},\"computed\":true,\"range\":[7,43]}],\"range\":[0,44]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[7,10]},{\"type\":{\"label\":\"[\"},\"range\":[10,11]},{\"type\":{\"label\":\"name\"},\"value\":\"propName\",\"range\":[11,19]},{\"type\":{\"label\":\"]\"},\"range\":[19,20]},{\"type\":{\"label\":\"[\"},\"range\":[20,21]},{\"type\":{\"label\":\"string\"},\"value\":\"key\",\"range\":[21,26]},{\"type\":{\"label\":\"]\"},\"range\":[26,27]},{\"type\":{\"label\":\"[\"},\"range\":[27,28]},{\"type\":{\"label\":\"name\"},\"value\":\"keys\",\"range\":[28,32]},{\"type\":{\"label\":\"(\"},\"range\":[32,33]},{\"type\":{\"label\":\")\"},\"range\":[33,34]},{\"type\":{\"label\":\"[\"},\"range\":[34,35]},{\"type\":{\"label\":\"string\"},\"value\":\"name\",\"range\":[35,41]},{\"type\":{\"label\":\"]\"},\"range\":[41,42]},{\"type\":{\"label\":\"]\"},\"range\":[42,43]},{\"type\":{\"label\":\")\"},\"range\":[43,44]}]",
  visitorKeys: _powerAssertVisitorKeys
},
    _ag7 = new _ArgumentRecorder(assert, _am7, {
  espath: "arguments/0",
  code: "foo[propName]['key'][keys()['name']]",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am8 = {
  content: "assert(foo[propName]['key'][keys()['name']])",
  filepath: "test/fixtures/MemberExpression/fixture.js",
  line: 17,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"MemberExpression\",\"object\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[7,10]},\"property\":{\"type\":\"Identifier\",\"name\":\"propName\",\"range\":[11,19]},\"computed\":true,\"range\":[7,20]},\"property\":{\"type\":\"StringLiteral\",\"value\":\"key\",\"range\":[21,26]},\"computed\":true,\"range\":[7,27]},\"property\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"keys\",\"range\":[28,32]},\"arguments\":[],\"range\":[28,34]},\"property\":{\"type\":\"StringLiteral\",\"value\":\"name\",\"range\":[35,41]},\"computed\":true,\"range\":[28,42]},\"computed\":true,\"range\":[7,43]}],\"range\":[0,44]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[7,10]},{\"type\":{\"label\":\"[\"},\"range\":[10,11]},{\"type\":{\"label\":\"name\"},\"value\":\"propName\",\"range\":[11,19]},{\"type\":{\"label\":\"]\"},\"range\":[19,20]},{\"type\":{\"label\":\"[\"},\"range\":[20,21]},{\"type\":{\"label\":\"string\"},\"value\":\"key\",\"range\":[21,26]},{\"type\":{\"label\":\"]\"},\"range\":[26,27]},{\"type\":{\"label\":\"[\"},\"range\":[27,28]},{\"type\":{\"label\":\"name\"},\"value\":\"keys\",\"range\":[28,32]},{\"type\":{\"label\":\"(\"},\"range\":[32,33]},{\"type\":{\"label\":\")\"},\"range\":[33,34]},{\"type\":{\"label\":\"[\"},\"range\":[34,35]},{\"type\":{\"label\":\"string\"},\"value\":\"name\",\"range\":[35,41]},{\"type\":{\"label\":\"]\"},\"range\":[41,42]},{\"type\":{\"label\":\"]\"},\"range\":[42,43]},{\"type\":{\"label\":\")\"},\"range\":[43,44]}]",
  visitorKeys: _powerAssertVisitorKeys
},
    _ag8 = new _ArgumentRecorder(assert, _am8, {
  espath: "arguments/0",
  code: "foo[propName]['key'][keys()['name']]",
  index: 0,
  name: "value",
  kind: "mandatory"
}),
    _am9 = {
  content: "assert.equal(ary1.length, ary2.length)",
  filepath: "test/fixtures/MemberExpression/fixture.js",
  line: 19,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"property\":{\"type\":\"Identifier\",\"name\":\"equal\",\"range\":[7,12]},\"computed\":false,\"range\":[0,12]},\"arguments\":[{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"ary1\",\"range\":[13,17]},\"property\":{\"type\":\"Identifier\",\"name\":\"length\",\"range\":[18,24]},\"computed\":false,\"range\":[13,24]},{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"ary2\",\"range\":[26,30]},\"property\":{\"type\":\"Identifier\",\"name\":\"length\",\"range\":[31,37]},\"computed\":false,\"range\":[26,37]}],\"range\":[0,38]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\".\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"equal\",\"range\":[7,12]},{\"type\":{\"label\":\"(\"},\"range\":[12,13]},{\"type\":{\"label\":\"name\"},\"value\":\"ary1\",\"range\":[13,17]},{\"type\":{\"label\":\".\"},\"range\":[17,18]},{\"type\":{\"label\":\"name\"},\"value\":\"length\",\"range\":[18,24]},{\"type\":{\"label\":\",\"},\"range\":[24,25]},{\"type\":{\"label\":\"name\"},\"value\":\"ary2\",\"range\":[26,30]},{\"type\":{\"label\":\".\"},\"range\":[30,31]},{\"type\":{\"label\":\"name\"},\"value\":\"length\",\"range\":[31,37]},{\"type\":{\"label\":\")\"},\"range\":[37,38]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[2]
},
    _ag9 = new _ArgumentRecorder(assert.equal, _am9, {
  espath: "arguments/0",
  code: "ary1.length",
  index: 0,
  name: "actual",
  kind: "mandatory"
}),
    _ag10 = new _ArgumentRecorder(assert.equal, _am9, {
  espath: "arguments/1",
  code: "ary2.length",
  index: 1,
  name: "expected",
  kind: "mandatory"
}),
    _am10 = {
  content: "assert.deepEqual(foo.propName, foo[key])",
  filepath: "test/fixtures/MemberExpression/fixture.js",
  line: 21,
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"property\":{\"type\":\"Identifier\",\"name\":\"deepEqual\",\"range\":[7,16]},\"computed\":false,\"range\":[0,16]},\"arguments\":[{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[17,20]},\"property\":{\"type\":\"Identifier\",\"name\":\"propName\",\"range\":[21,29]},\"computed\":false,\"range\":[17,29]},{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[31,34]},\"property\":{\"type\":\"Identifier\",\"name\":\"key\",\"range\":[35,38]},\"computed\":true,\"range\":[31,39]}],\"range\":[0,40]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\".\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"deepEqual\",\"range\":[7,16]},{\"type\":{\"label\":\"(\"},\"range\":[16,17]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[17,20]},{\"type\":{\"label\":\".\"},\"range\":[20,21]},{\"type\":{\"label\":\"name\"},\"value\":\"propName\",\"range\":[21,29]},{\"type\":{\"label\":\",\"},\"range\":[29,30]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[31,34]},{\"type\":{\"label\":\"[\"},\"range\":[34,35]},{\"type\":{\"label\":\"name\"},\"value\":\"key\",\"range\":[35,38]},{\"type\":{\"label\":\"]\"},\"range\":[38,39]},{\"type\":{\"label\":\")\"},\"range\":[39,40]}]",
  visitorKeys: _powerAssertVisitorKeys,
  config: _powerAssertConfig[6]
},
    _ag11 = new _ArgumentRecorder(assert.deepEqual, _am10, {
  espath: "arguments/0",
  code: "foo.propName",
  index: 0,
  name: "actual",
  kind: "mandatory"
}),
    _ag12 = new _ArgumentRecorder(assert.deepEqual, _am10, {
  espath: "arguments/1",
  code: "foo[key]",
  index: 1,
  name: "expected",
  kind: "mandatory"
});

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

assert(_ag._rec(_ag._tap(foo, "arguments/0/object").bar, "arguments/0"), new _AssertionMessage([_ag], _am));
assert(_ag2._rec(_ag2._tap(_ag2._tap(foo, "arguments/0/object/object").bar, "arguments/0/object").baz, "arguments/0"), new _AssertionMessage([_ag2], _am2));
assert(_ag3._rec(_ag3._tap(foo, "arguments/0/object")['bar'], "arguments/0"), new _AssertionMessage([_ag3], _am3));
assert(_ag4._rec(_ag4._tap(foo, "arguments/0/object")[_ag4._tap(propName, "arguments/0/property")], "arguments/0"), new _AssertionMessage([_ag4], _am4));
assert(_ag5._rec(_ag5._tap(foo, "arguments/0/object")[_ag5._tap(propName, "arguments/0/property")], "arguments/0"), new _AssertionMessage([_ag5], _am5));
assert(_ag6._rec(_ag6._tap(foo, "arguments/0/object")[_ag6._tap(func(_ag6._tap(key, "arguments/0/property/arguments/0")), "arguments/0/property")], "arguments/0"), new _AssertionMessage([_ag6], _am6));
assert(_ag7._rec(_ag7._tap(_ag7._tap(_ag7._tap(foo, "arguments/0/object/object/object")[_ag7._tap(propName, "arguments/0/object/object/property")], "arguments/0/object/object")['key'], "arguments/0/object")[_ag7._tap(_ag7._tap(keys(), "arguments/0/property/object")['name'], "arguments/0/property")], "arguments/0"), new _AssertionMessage([_ag7], _am7));
assert(_ag8._rec(_ag8._tap(_ag8._tap(_ag8._tap(foo, "arguments/0/object/object/object")[_ag8._tap(propName, "arguments/0/object/object/property")], "arguments/0/object/object")['key'], "arguments/0/object")[_ag8._tap(_ag8._tap(keys(), "arguments/0/property/object")['name'], "arguments/0/property")], "arguments/0"), new _AssertionMessage([_ag8], _am8));
assert.equal(_ag9._rec(_ag9._tap(ary1, "arguments/0/object").length, "arguments/0"), _ag10._rec(_ag10._tap(ary2, "arguments/1/object").length, "arguments/1"), new _AssertionMessage([_ag9, _ag10], _am9));
assert.deepEqual(_ag11._rec(_ag11._tap(foo, "arguments/0/object").propName, "arguments/0"), _ag12._rec(_ag12._tap(foo, "arguments/1/object")[_ag12._tap(key, "arguments/1/property")], "arguments/1"), new _AssertionMessage([_ag11, _ag12], _am10));
