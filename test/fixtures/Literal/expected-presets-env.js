'use strict';

var _powerAssertVisitorKeys = "{\"ArrayExpression\":[\"elements\"],\"AssignmentExpression\":[\"left\",\"right\"],\"BinaryExpression\":[\"left\",\"right\"],\"InterpreterDirective\":[],\"Directive\":[\"value\"],\"DirectiveLiteral\":[],\"BlockStatement\":[\"directives\",\"body\"],\"BreakStatement\":[\"label\"],\"CallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"CatchClause\":[\"param\",\"body\"],\"ConditionalExpression\":[\"test\",\"consequent\",\"alternate\"],\"ContinueStatement\":[\"label\"],\"DebuggerStatement\":[],\"DoWhileStatement\":[\"test\",\"body\"],\"EmptyStatement\":[],\"ExpressionStatement\":[\"expression\"],\"File\":[\"program\"],\"ForInStatement\":[\"left\",\"right\",\"body\"],\"ForStatement\":[\"init\",\"test\",\"update\",\"body\"],\"FunctionDeclaration\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"FunctionExpression\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"Identifier\":[\"typeAnnotation\",\"decorators\"],\"IfStatement\":[\"test\",\"consequent\",\"alternate\"],\"LabeledStatement\":[\"label\",\"body\"],\"StringLiteral\":[],\"NumericLiteral\":[],\"NullLiteral\":[],\"BooleanLiteral\":[],\"RegExpLiteral\":[],\"LogicalExpression\":[\"left\",\"right\"],\"MemberExpression\":[\"object\",\"property\"],\"NewExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"Program\":[\"directives\",\"body\"],\"ObjectExpression\":[\"properties\"],\"ObjectMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectProperty\":[\"key\",\"value\",\"decorators\"],\"RestElement\":[\"argument\",\"typeAnnotation\"],\"ReturnStatement\":[\"argument\"],\"SequenceExpression\":[\"expressions\"],\"SwitchCase\":[\"test\",\"consequent\"],\"SwitchStatement\":[\"discriminant\",\"cases\"],\"ThisExpression\":[],\"ThrowStatement\":[\"argument\"],\"TryStatement\":[\"block\",\"handler\",\"finalizer\"],\"UnaryExpression\":[\"argument\"],\"UpdateExpression\":[\"argument\"],\"VariableDeclaration\":[\"declarations\"],\"VariableDeclarator\":[\"id\",\"init\"],\"WhileStatement\":[\"test\",\"body\"],\"WithStatement\":[\"object\",\"body\"],\"AssignmentPattern\":[\"left\",\"right\",\"decorators\"],\"ArrayPattern\":[\"elements\",\"typeAnnotation\"],\"ArrowFunctionExpression\":[\"params\",\"body\",\"returnType\",\"typeParameters\"],\"ClassBody\":[\"body\"],\"ClassDeclaration\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ClassExpression\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ExportAllDeclaration\":[\"source\"],\"ExportDefaultDeclaration\":[\"declaration\"],\"ExportNamedDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"ExportSpecifier\":[\"local\",\"exported\"],\"ForOfStatement\":[\"left\",\"right\",\"body\"],\"ImportDeclaration\":[\"specifiers\",\"source\"],\"ImportDefaultSpecifier\":[\"local\"],\"ImportNamespaceSpecifier\":[\"local\"],\"ImportSpecifier\":[\"local\",\"imported\"],\"MetaProperty\":[\"meta\",\"property\"],\"ClassMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectPattern\":[\"properties\",\"typeAnnotation\",\"decorators\"],\"SpreadElement\":[\"argument\"],\"Super\":[],\"TaggedTemplateExpression\":[\"tag\",\"quasi\"],\"TemplateElement\":[],\"TemplateLiteral\":[\"quasis\",\"expressions\"],\"YieldExpression\":[\"argument\"],\"AnyTypeAnnotation\":[],\"ArrayTypeAnnotation\":[\"elementType\"],\"BooleanTypeAnnotation\":[],\"BooleanLiteralTypeAnnotation\":[],\"NullLiteralTypeAnnotation\":[],\"ClassImplements\":[\"id\",\"typeParameters\"],\"DeclareClass\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareFunction\":[\"id\"],\"DeclareInterface\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareModule\":[\"id\",\"body\"],\"DeclareModuleExports\":[\"typeAnnotation\"],\"DeclareTypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"DeclareOpaqueType\":[\"id\",\"typeParameters\",\"supertype\"],\"DeclareVariable\":[\"id\"],\"DeclareExportDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"DeclareExportAllDeclaration\":[\"source\"],\"DeclaredPredicate\":[\"value\"],\"ExistsTypeAnnotation\":[],\"FunctionTypeAnnotation\":[\"typeParameters\",\"params\",\"rest\",\"returnType\"],\"FunctionTypeParam\":[\"name\",\"typeAnnotation\"],\"GenericTypeAnnotation\":[\"id\",\"typeParameters\"],\"InferredPredicate\":[],\"InterfaceExtends\":[\"id\",\"typeParameters\"],\"InterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"InterfaceTypeAnnotation\":[\"extends\",\"body\"],\"IntersectionTypeAnnotation\":[\"types\"],\"MixedTypeAnnotation\":[],\"EmptyTypeAnnotation\":[],\"NullableTypeAnnotation\":[\"typeAnnotation\"],\"NumberLiteralTypeAnnotation\":[],\"NumberTypeAnnotation\":[],\"ObjectTypeAnnotation\":[\"properties\",\"indexers\",\"callProperties\",\"internalSlots\"],\"ObjectTypeInternalSlot\":[\"id\",\"value\",\"optional\",\"static\",\"method\"],\"ObjectTypeCallProperty\":[\"value\"],\"ObjectTypeIndexer\":[\"id\",\"key\",\"value\",\"variance\"],\"ObjectTypeProperty\":[\"key\",\"value\",\"variance\"],\"ObjectTypeSpreadProperty\":[\"argument\"],\"OpaqueType\":[\"id\",\"typeParameters\",\"supertype\",\"impltype\"],\"QualifiedTypeIdentifier\":[\"id\",\"qualification\"],\"StringLiteralTypeAnnotation\":[],\"StringTypeAnnotation\":[],\"ThisTypeAnnotation\":[],\"TupleTypeAnnotation\":[\"types\"],\"TypeofTypeAnnotation\":[\"argument\"],\"TypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"TypeAnnotation\":[\"typeAnnotation\"],\"TypeCastExpression\":[\"expression\",\"typeAnnotation\"],\"TypeParameter\":[\"bound\",\"default\",\"variance\"],\"TypeParameterDeclaration\":[\"params\"],\"TypeParameterInstantiation\":[\"params\"],\"UnionTypeAnnotation\":[\"types\"],\"Variance\":[],\"VoidTypeAnnotation\":[],\"JSXAttribute\":[\"name\",\"value\"],\"JSXClosingElement\":[\"name\"],\"JSXElement\":[\"openingElement\",\"children\",\"closingElement\"],\"JSXEmptyExpression\":[],\"JSXExpressionContainer\":[\"expression\"],\"JSXSpreadChild\":[\"expression\"],\"JSXIdentifier\":[],\"JSXMemberExpression\":[\"object\",\"property\"],\"JSXNamespacedName\":[\"namespace\",\"name\"],\"JSXOpeningElement\":[\"name\",\"attributes\"],\"JSXSpreadAttribute\":[\"argument\"],\"JSXText\":[],\"JSXFragment\":[\"openingFragment\",\"children\",\"closingFragment\"],\"JSXOpeningFragment\":[],\"JSXClosingFragment\":[],\"Noop\":[],\"ParenthesizedExpression\":[\"expression\"],\"AwaitExpression\":[\"argument\"],\"BindExpression\":[\"object\",\"callee\"],\"ClassProperty\":[\"key\",\"value\",\"typeAnnotation\",\"decorators\"],\"OptionalMemberExpression\":[\"object\",\"property\"],\"PipelineTopicExpression\":[\"expression\"],\"PipelineBareFunction\":[\"callee\"],\"PipelinePrimaryTopicReference\":[],\"OptionalCallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"ClassPrivateProperty\":[\"key\",\"value\"],\"ClassPrivateMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"Import\":[],\"Decorator\":[\"expression\"],\"DoExpression\":[\"body\"],\"ExportDefaultSpecifier\":[\"exported\"],\"ExportNamespaceSpecifier\":[\"exported\"],\"PrivateName\":[\"id\"],\"BigIntLiteral\":[],\"TSParameterProperty\":[\"parameter\"],\"TSDeclareFunction\":[\"id\",\"typeParameters\",\"params\",\"returnType\"],\"TSDeclareMethod\":[\"decorators\",\"key\",\"typeParameters\",\"params\",\"returnType\"],\"TSQualifiedName\":[\"left\",\"right\"],\"TSCallSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSConstructSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSPropertySignature\":[\"key\",\"typeAnnotation\",\"initializer\"],\"TSMethodSignature\":[\"key\",\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSIndexSignature\":[\"parameters\",\"typeAnnotation\"],\"TSAnyKeyword\":[],\"TSUnknownKeyword\":[],\"TSNumberKeyword\":[],\"TSObjectKeyword\":[],\"TSBooleanKeyword\":[],\"TSStringKeyword\":[],\"TSSymbolKeyword\":[],\"TSVoidKeyword\":[],\"TSUndefinedKeyword\":[],\"TSNullKeyword\":[],\"TSNeverKeyword\":[],\"TSThisType\":[],\"TSFunctionType\":[\"typeParameters\",\"typeAnnotation\"],\"TSConstructorType\":[\"typeParameters\",\"typeAnnotation\"],\"TSTypeReference\":[\"typeName\",\"typeParameters\"],\"TSTypePredicate\":[\"parameterName\",\"typeAnnotation\"],\"TSTypeQuery\":[\"exprName\"],\"TSTypeLiteral\":[\"members\"],\"TSArrayType\":[\"elementType\"],\"TSTupleType\":[\"elementTypes\"],\"TSOptionalType\":[\"typeAnnotation\"],\"TSRestType\":[\"typeAnnotation\"],\"TSUnionType\":[\"types\"],\"TSIntersectionType\":[\"types\"],\"TSConditionalType\":[\"checkType\",\"extendsType\",\"trueType\",\"falseType\"],\"TSInferType\":[\"typeParameter\"],\"TSParenthesizedType\":[\"typeAnnotation\"],\"TSTypeOperator\":[\"typeAnnotation\"],\"TSIndexedAccessType\":[\"objectType\",\"indexType\"],\"TSMappedType\":[\"typeParameter\",\"typeAnnotation\"],\"TSLiteralType\":[\"literal\"],\"TSExpressionWithTypeArguments\":[\"expression\",\"typeParameters\"],\"TSInterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"TSInterfaceBody\":[\"body\"],\"TSTypeAliasDeclaration\":[\"id\",\"typeParameters\",\"typeAnnotation\"],\"TSAsExpression\":[\"expression\",\"typeAnnotation\"],\"TSTypeAssertion\":[\"typeAnnotation\",\"expression\"],\"TSEnumDeclaration\":[\"id\",\"members\"],\"TSEnumMember\":[\"id\",\"initializer\"],\"TSModuleDeclaration\":[\"id\",\"body\"],\"TSModuleBlock\":[\"body\"],\"TSImportType\":[\"argument\",\"qualifier\",\"typeParameters\"],\"TSImportEqualsDeclaration\":[\"id\",\"moduleReference\"],\"TSExternalModuleReference\":[\"expression\"],\"TSNonNullExpression\":[\"expression\"],\"TSExportAssignment\":[\"expression\"],\"TSNamespaceExportDeclaration\":[\"id\"],\"TSTypeAnnotation\":[\"typeAnnotation\"],\"TSTypeParameterInstantiation\":[\"params\"],\"TSTypeParameterDeclaration\":[\"params\"],\"TSTypeParameter\":[\"constraint\",\"default\"]}",
    _pwmeta = function _pwmeta(ptnidx, content, filepath, line, extra) { var version = 2, patterns = [{ pattern: "assert(value, [message])", args: [{ index: 0, name: "value", kind: "mandatory" }, { index: 1, name: "message", kind: "optional", message: true }] }, { pattern: "assert.ok(value, [message])", args: [{ index: 0, name: "value", kind: "mandatory" }, { index: 1, name: "message", kind: "optional", message: true }] }, { pattern: "assert.equal(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.strictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notStrictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.deepEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notDeepEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.deepStrictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notDeepStrictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.throws(fn, [error], [message])", args: [{ index: 0, name: "fn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.doesNotThrow(fn, [error], [message])", args: [{ index: 0, name: "fn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.rejects(asyncFn, [error], [message])", args: [{ index: 0, name: "asyncFn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.doesNotReject(asyncFn, [error], [message])", args: [{ index: 0, name: "asyncFn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }]; return Object.assign({ version: version, content: content, filepath: filepath, line: line }, extra, patterns[ptnidx]); },
    _am = _pwmeta(0, "assert(false)", "test/fixtures/Literal/fixture.js", 3, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BooleanLiteral\",\"value\":false,\"range\":[7,12]}],\"range\":[0,13]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"false\"},\"value\":\"false\",\"range\":[7,12]},{\"type\":{\"label\":\")\"},\"range\":[12,13]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _am2 = _pwmeta(0, "assert(0)", "test/fixtures/Literal/fixture.js", 5, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"NumericLiteral\",\"value\":0,\"range\":[7,8]}],\"range\":[0,9]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"num\"},\"value\":0,\"range\":[7,8]},{\"type\":{\"label\":\")\"},\"range\":[8,9]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _am3 = _pwmeta(2, "assert.equal(1, 0)", "test/fixtures/Literal/fixture.js", 7, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"property\":{\"type\":\"Identifier\",\"name\":\"equal\",\"range\":[7,12]},\"computed\":false,\"range\":[0,12]},\"arguments\":[{\"type\":\"NumericLiteral\",\"value\":1,\"range\":[13,14]},{\"type\":\"NumericLiteral\",\"value\":0,\"range\":[16,17]}],\"range\":[0,18]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\".\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"equal\",\"range\":[7,12]},{\"type\":{\"label\":\"(\"},\"range\":[12,13]},{\"type\":{\"label\":\"num\"},\"value\":1,\"range\":[13,14]},{\"type\":{\"label\":\",\"},\"range\":[14,15]},{\"type\":{\"label\":\"num\"},\"value\":0,\"range\":[16,17]},{\"type\":{\"label\":\")\"},\"range\":[17,18]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _am4 = _pwmeta(0, "assert(false, 'message')", "test/fixtures/Literal/fixture.js", 9, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BooleanLiteral\",\"value\":false,\"range\":[7,12]},{\"type\":\"StringLiteral\",\"value\":\"message\",\"range\":[14,23]}],\"range\":[0,24]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"false\"},\"value\":\"false\",\"range\":[7,12]},{\"type\":{\"label\":\",\"},\"range\":[12,13]},{\"type\":{\"label\":\"string\"},\"value\":\"message\",\"range\":[14,23]},{\"type\":{\"label\":\")\"},\"range\":[23,24]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _am5 = _pwmeta(0, "assert(false, messageStr)", "test/fixtures/Literal/fixture.js", 11, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BooleanLiteral\",\"value\":false,\"range\":[7,12]},{\"type\":\"Identifier\",\"name\":\"messageStr\",\"range\":[14,24]}],\"range\":[0,25]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"false\"},\"value\":\"false\",\"range\":[7,12]},{\"type\":{\"label\":\",\"},\"range\":[12,13]},{\"type\":{\"label\":\"name\"},\"value\":\"messageStr\",\"range\":[14,24]},{\"type\":{\"label\":\")\"},\"range\":[24,25]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _ArgumentRecorder = function () { var isPromiseLike = function isPromiseLike(o) { return o !== null && _typeof(o) === "object" && typeof o.then === "function" && typeof o.catch === "function"; }; var mark = function mark(_this, s) { return function () { var args = Array.from(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; }; var $Promise$ = function $Promise$(prms) { _classCallCheck(this, $Promise$); this.status = "pending"; prms.then(mark(this, "resolved"), mark(this, "rejected")); }; var wrap = function wrap(v) { return isPromiseLike(v) ? new $Promise$(v) : v; }; var ArgumentRecorder = /*#__PURE__*/ function () { function ArgumentRecorder(callee, am, matchIndex) { _classCallCheck(this, ArgumentRecorder); this._callee = callee; this._am = am; this._logs = []; this._recorded = null; this._val = null; this._idx = matchIndex; var argconf = am.args[matchIndex]; this._isBlock = !!argconf.block; } _createClass(ArgumentRecorder, [{ key: "metadata", value: function metadata() { return this._am; } }, { key: "matchIndex", value: function matchIndex() { return this._idx; } }, { key: "val", value: function val() { return this._val; } }, { key: "_tap", value: function _tap(value, espath) { this._logs.push({ value: wrap(value), espath: espath }); return value; } }, { key: "_rec", value: function _rec(value, espath) { var empowered = this._callee && this._callee._empowered; try { if (!empowered) return value; var log = { value: wrap(value), espath: espath }; this._logs.push(log); if (this._isBlock && empowered && typeof value === "function") { value = new Proxy(value, { apply: function apply(target, thisArg, args) { try { var ret = target.apply(thisArg, args); log.value = wrap(ret); return ret; } catch (e) { log.value = e; throw e; } } }); } this._recorded = { value: value, logs: [].concat(this._logs) }; return this; } finally { this._val = value; this._logs = []; } } }, { key: "eject", value: function eject() { var ret = this._recorded; this._recorded = null; this._val = null; return ret; } }]); return ArgumentRecorder; }(); return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert, _am5, 1),
    _AssertionMessage = function () { var _s = "\n\n      "; var AssertionMessage = /*#__PURE__*/ function () { function AssertionMessage(am, matchIndex, msgOrRec) { _classCallCheck(this, AssertionMessage); this._am = am; this._idx = matchIndex; this._msgOrRec = msgOrRec; } _createClass(AssertionMessage, [{ key: "metadata", value: function metadata() { return this._am; } }, { key: "matchIndex", value: function matchIndex() { return this._idx; } }, { key: "val", value: function val() { if (this._msgOrRec && typeof this._msgOrRec.val === "function") { return this._msgOrRec.val(); } else { return this._msgOrRec; } } }, { key: "eject", value: function eject() { if (this._msgOrRec && typeof this._msgOrRec.eject === "function") { return this._msgOrRec.eject(); } else { return { value: this.val(), logs: [] }; } } }, { key: "toString", value: function toString() { var msg = typeof this._msgOrRec === "string" ? this._msgOrRec : ""; msg += "".concat(_s, "# ").concat(this._am.filepath, ":").concat(this._am.line); msg += "".concat(_s).concat(this._am.content); msg += "".concat(_s, "[WARNING] power-assert is not configured. see: https://github.com/power-assert-js/power-assert"); msg += "\n"; return msg; } }]); return AssertionMessage; }(); return AssertionMessage; }(),
    _am6 = _pwmeta(2, "assert.equal(foo, 'bar', 'msg')", "test/fixtures/Literal/fixture.js", 13, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"property\":{\"type\":\"Identifier\",\"name\":\"equal\",\"range\":[7,12]},\"computed\":false,\"range\":[0,12]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[13,16]},{\"type\":\"StringLiteral\",\"value\":\"bar\",\"range\":[18,23]},{\"type\":\"StringLiteral\",\"value\":\"msg\",\"range\":[25,30]}],\"range\":[0,31]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\".\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"equal\",\"range\":[7,12]},{\"type\":{\"label\":\"(\"},\"range\":[12,13]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[13,16]},{\"type\":{\"label\":\",\"},\"range\":[16,17]},{\"type\":{\"label\":\"string\"},\"value\":\"bar\",\"range\":[18,23]},{\"type\":{\"label\":\",\"},\"range\":[23,24]},{\"type\":{\"label\":\"string\"},\"value\":\"msg\",\"range\":[25,30]},{\"type\":{\"label\":\")\"},\"range\":[30,31]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _ag2 = new _ArgumentRecorder(assert.equal, _am6, 0),
    _am7 = _pwmeta(0, "assert(/^not/.exec(str))", "test/fixtures/Literal/fixture.js", 15, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"CallExpression\",\"callee\":{\"type\":\"MemberExpression\",\"object\":{\"type\":\"RegExpLiteral\",\"pattern\":\"^not\",\"flags\":\"\",\"range\":[7,13]},\"property\":{\"type\":\"Identifier\",\"name\":\"exec\",\"range\":[14,18]},\"computed\":false,\"range\":[7,18]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"str\",\"range\":[19,22]}],\"range\":[7,23]}],\"range\":[0,24]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"regexp\"},\"value\":{\"pattern\":\"^not\",\"flags\":\"\"},\"range\":[7,13]},{\"type\":{\"label\":\".\"},\"range\":[13,14]},{\"type\":{\"label\":\"name\"},\"value\":\"exec\",\"range\":[14,18]},{\"type\":{\"label\":\"(\"},\"range\":[18,19]},{\"type\":{\"label\":\"name\"},\"value\":\"str\",\"range\":[19,22]},{\"type\":{\"label\":\")\"},\"range\":[22,23]},{\"type\":{\"label\":\")\"},\"range\":[23,24]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _ag3 = new _ArgumentRecorder(assert, _am7, 0),
    _am8 = _pwmeta(0, "assert(fuga !== '\u3075\u304C')", "test/fixtures/Literal/fixture.js", 17, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"!==\",\"left\":{\"type\":\"Identifier\",\"name\":\"fuga\",\"range\":[7,11]},\"right\":{\"type\":\"StringLiteral\",\"value\":\"\u3075\u304C\",\"range\":[16,20]},\"range\":[7,20]}],\"range\":[0,21]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"fuga\",\"range\":[7,11]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"!==\",\"range\":[12,15]},{\"type\":{\"label\":\"string\"},\"value\":\"\u3075\u304C\",\"range\":[16,20]},{\"type\":{\"label\":\")\"},\"range\":[20,21]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _ag4 = new _ArgumentRecorder(assert, _am8, 0),
    _am9 = _pwmeta(0, "assert('\u307B\u3052' !== '\u3075\u304C')", "test/fixtures/Literal/fixture.js", 19, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"BinaryExpression\",\"operator\":\"!==\",\"left\":{\"type\":\"StringLiteral\",\"value\":\"\u307B\u3052\",\"range\":[7,11]},\"right\":{\"type\":\"StringLiteral\",\"value\":\"\u3075\u304C\",\"range\":[16,20]},\"range\":[7,20]}],\"range\":[0,21]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"string\"},\"value\":\"\u307B\u3052\",\"range\":[7,11]},{\"type\":{\"label\":\"==/!=\"},\"value\":\"!==\",\"range\":[12,15]},{\"type\":{\"label\":\"string\"},\"value\":\"\u3075\u304C\",\"range\":[16,20]},{\"type\":{\"label\":\")\"},\"range\":[20,21]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _ag5 = new _ArgumentRecorder(assert, _am9, 0),
    _am10 = _pwmeta(0, "assert(0b111110111)", "test/fixtures/Literal/fixture.js", 21, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"NumericLiteral\",\"value\":503,\"range\":[7,18]}],\"range\":[0,19]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"num\"},\"value\":503,\"range\":[7,18]},{\"type\":{\"label\":\")\"},\"range\":[18,19]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _am11 = _pwmeta(0, "assert(0o767)", "test/fixtures/Literal/fixture.js", 23, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"NumericLiteral\",\"value\":503,\"range\":[7,12]}],\"range\":[0,13]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"num\"},\"value\":503,\"range\":[7,12]},{\"type\":{\"label\":\")\"},\"range\":[12,13]}]",
  visitorKeys: _powerAssertVisitorKeys
});

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

assert(false);
assert(0);
assert.equal(1, 0);
assert(false, 'message');
assert(false, new _AssertionMessage(_am5, 1, _ag._rec(messageStr, "arguments/1")));
assert.equal(_ag2._rec(foo, "arguments/0"), 'bar', new _AssertionMessage(_am6, 2, 'msg'));
assert(_ag3._rec(/^not/.exec(_ag3._tap(str, "arguments/0/arguments/0")), "arguments/0"), new _AssertionMessage(_am7, -1));
assert(_ag4._rec(_ag4._tap(fuga, "arguments/0/left") !== 'ふが', "arguments/0"), new _AssertionMessage(_am8, -1));
assert(_ag5._rec('ほげ' !== 'ふが', "arguments/0"), new _AssertionMessage(_am9, -1));
assert(503);
assert(503);
