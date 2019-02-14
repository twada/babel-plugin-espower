'use strict';

var _powerAssertVisitorKeys = "{\"ArrayExpression\":[\"elements\"],\"AssignmentExpression\":[\"left\",\"right\"],\"BinaryExpression\":[\"left\",\"right\"],\"InterpreterDirective\":[],\"Directive\":[\"value\"],\"DirectiveLiteral\":[],\"BlockStatement\":[\"directives\",\"body\"],\"BreakStatement\":[\"label\"],\"CallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"CatchClause\":[\"param\",\"body\"],\"ConditionalExpression\":[\"test\",\"consequent\",\"alternate\"],\"ContinueStatement\":[\"label\"],\"DebuggerStatement\":[],\"DoWhileStatement\":[\"test\",\"body\"],\"EmptyStatement\":[],\"ExpressionStatement\":[\"expression\"],\"File\":[\"program\"],\"ForInStatement\":[\"left\",\"right\",\"body\"],\"ForStatement\":[\"init\",\"test\",\"update\",\"body\"],\"FunctionDeclaration\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"FunctionExpression\":[\"id\",\"params\",\"body\",\"returnType\",\"typeParameters\"],\"Identifier\":[\"typeAnnotation\",\"decorators\"],\"IfStatement\":[\"test\",\"consequent\",\"alternate\"],\"LabeledStatement\":[\"label\",\"body\"],\"StringLiteral\":[],\"NumericLiteral\":[],\"NullLiteral\":[],\"BooleanLiteral\":[],\"RegExpLiteral\":[],\"LogicalExpression\":[\"left\",\"right\"],\"MemberExpression\":[\"object\",\"property\"],\"NewExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"Program\":[\"directives\",\"body\"],\"ObjectExpression\":[\"properties\"],\"ObjectMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectProperty\":[\"key\",\"value\",\"decorators\"],\"RestElement\":[\"argument\",\"typeAnnotation\"],\"ReturnStatement\":[\"argument\"],\"SequenceExpression\":[\"expressions\"],\"SwitchCase\":[\"test\",\"consequent\"],\"SwitchStatement\":[\"discriminant\",\"cases\"],\"ThisExpression\":[],\"ThrowStatement\":[\"argument\"],\"TryStatement\":[\"block\",\"handler\",\"finalizer\"],\"UnaryExpression\":[\"argument\"],\"UpdateExpression\":[\"argument\"],\"VariableDeclaration\":[\"declarations\"],\"VariableDeclarator\":[\"id\",\"init\"],\"WhileStatement\":[\"test\",\"body\"],\"WithStatement\":[\"object\",\"body\"],\"AssignmentPattern\":[\"left\",\"right\",\"decorators\"],\"ArrayPattern\":[\"elements\",\"typeAnnotation\"],\"ArrowFunctionExpression\":[\"params\",\"body\",\"returnType\",\"typeParameters\"],\"ClassBody\":[\"body\"],\"ClassDeclaration\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ClassExpression\":[\"id\",\"body\",\"superClass\",\"mixins\",\"typeParameters\",\"superTypeParameters\",\"implements\",\"decorators\"],\"ExportAllDeclaration\":[\"source\"],\"ExportDefaultDeclaration\":[\"declaration\"],\"ExportNamedDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"ExportSpecifier\":[\"local\",\"exported\"],\"ForOfStatement\":[\"left\",\"right\",\"body\"],\"ImportDeclaration\":[\"specifiers\",\"source\"],\"ImportDefaultSpecifier\":[\"local\"],\"ImportNamespaceSpecifier\":[\"local\"],\"ImportSpecifier\":[\"local\",\"imported\"],\"MetaProperty\":[\"meta\",\"property\"],\"ClassMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"ObjectPattern\":[\"properties\",\"typeAnnotation\",\"decorators\"],\"SpreadElement\":[\"argument\"],\"Super\":[],\"TaggedTemplateExpression\":[\"tag\",\"quasi\"],\"TemplateElement\":[],\"TemplateLiteral\":[\"quasis\",\"expressions\"],\"YieldExpression\":[\"argument\"],\"AnyTypeAnnotation\":[],\"ArrayTypeAnnotation\":[\"elementType\"],\"BooleanTypeAnnotation\":[],\"BooleanLiteralTypeAnnotation\":[],\"NullLiteralTypeAnnotation\":[],\"ClassImplements\":[\"id\",\"typeParameters\"],\"DeclareClass\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareFunction\":[\"id\"],\"DeclareInterface\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"DeclareModule\":[\"id\",\"body\"],\"DeclareModuleExports\":[\"typeAnnotation\"],\"DeclareTypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"DeclareOpaqueType\":[\"id\",\"typeParameters\",\"supertype\"],\"DeclareVariable\":[\"id\"],\"DeclareExportDeclaration\":[\"declaration\",\"specifiers\",\"source\"],\"DeclareExportAllDeclaration\":[\"source\"],\"DeclaredPredicate\":[\"value\"],\"ExistsTypeAnnotation\":[],\"FunctionTypeAnnotation\":[\"typeParameters\",\"params\",\"rest\",\"returnType\"],\"FunctionTypeParam\":[\"name\",\"typeAnnotation\"],\"GenericTypeAnnotation\":[\"id\",\"typeParameters\"],\"InferredPredicate\":[],\"InterfaceExtends\":[\"id\",\"typeParameters\"],\"InterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"mixins\",\"implements\",\"body\"],\"InterfaceTypeAnnotation\":[\"extends\",\"body\"],\"IntersectionTypeAnnotation\":[\"types\"],\"MixedTypeAnnotation\":[],\"EmptyTypeAnnotation\":[],\"NullableTypeAnnotation\":[\"typeAnnotation\"],\"NumberLiteralTypeAnnotation\":[],\"NumberTypeAnnotation\":[],\"ObjectTypeAnnotation\":[\"properties\",\"indexers\",\"callProperties\",\"internalSlots\"],\"ObjectTypeInternalSlot\":[\"id\",\"value\",\"optional\",\"static\",\"method\"],\"ObjectTypeCallProperty\":[\"value\"],\"ObjectTypeIndexer\":[\"id\",\"key\",\"value\",\"variance\"],\"ObjectTypeProperty\":[\"key\",\"value\",\"variance\"],\"ObjectTypeSpreadProperty\":[\"argument\"],\"OpaqueType\":[\"id\",\"typeParameters\",\"supertype\",\"impltype\"],\"QualifiedTypeIdentifier\":[\"id\",\"qualification\"],\"StringLiteralTypeAnnotation\":[],\"StringTypeAnnotation\":[],\"ThisTypeAnnotation\":[],\"TupleTypeAnnotation\":[\"types\"],\"TypeofTypeAnnotation\":[\"argument\"],\"TypeAlias\":[\"id\",\"typeParameters\",\"right\"],\"TypeAnnotation\":[\"typeAnnotation\"],\"TypeCastExpression\":[\"expression\",\"typeAnnotation\"],\"TypeParameter\":[\"bound\",\"default\",\"variance\"],\"TypeParameterDeclaration\":[\"params\"],\"TypeParameterInstantiation\":[\"params\"],\"UnionTypeAnnotation\":[\"types\"],\"Variance\":[],\"VoidTypeAnnotation\":[],\"JSXAttribute\":[\"name\",\"value\"],\"JSXClosingElement\":[\"name\"],\"JSXElement\":[\"openingElement\",\"children\",\"closingElement\"],\"JSXEmptyExpression\":[],\"JSXExpressionContainer\":[\"expression\"],\"JSXSpreadChild\":[\"expression\"],\"JSXIdentifier\":[],\"JSXMemberExpression\":[\"object\",\"property\"],\"JSXNamespacedName\":[\"namespace\",\"name\"],\"JSXOpeningElement\":[\"name\",\"attributes\"],\"JSXSpreadAttribute\":[\"argument\"],\"JSXText\":[],\"JSXFragment\":[\"openingFragment\",\"children\",\"closingFragment\"],\"JSXOpeningFragment\":[],\"JSXClosingFragment\":[],\"Noop\":[],\"ParenthesizedExpression\":[\"expression\"],\"AwaitExpression\":[\"argument\"],\"BindExpression\":[\"object\",\"callee\"],\"ClassProperty\":[\"key\",\"value\",\"typeAnnotation\",\"decorators\"],\"OptionalMemberExpression\":[\"object\",\"property\"],\"PipelineTopicExpression\":[\"expression\"],\"PipelineBareFunction\":[\"callee\"],\"PipelinePrimaryTopicReference\":[],\"OptionalCallExpression\":[\"callee\",\"arguments\",\"typeParameters\",\"typeArguments\"],\"ClassPrivateProperty\":[\"key\",\"value\"],\"ClassPrivateMethod\":[\"key\",\"params\",\"body\",\"decorators\",\"returnType\",\"typeParameters\"],\"Import\":[],\"Decorator\":[\"expression\"],\"DoExpression\":[\"body\"],\"ExportDefaultSpecifier\":[\"exported\"],\"ExportNamespaceSpecifier\":[\"exported\"],\"PrivateName\":[\"id\"],\"BigIntLiteral\":[],\"TSParameterProperty\":[\"parameter\"],\"TSDeclareFunction\":[\"id\",\"typeParameters\",\"params\",\"returnType\"],\"TSDeclareMethod\":[\"decorators\",\"key\",\"typeParameters\",\"params\",\"returnType\"],\"TSQualifiedName\":[\"left\",\"right\"],\"TSCallSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSConstructSignatureDeclaration\":[\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSPropertySignature\":[\"key\",\"typeAnnotation\",\"initializer\"],\"TSMethodSignature\":[\"key\",\"typeParameters\",\"parameters\",\"typeAnnotation\"],\"TSIndexSignature\":[\"parameters\",\"typeAnnotation\"],\"TSAnyKeyword\":[],\"TSUnknownKeyword\":[],\"TSNumberKeyword\":[],\"TSObjectKeyword\":[],\"TSBooleanKeyword\":[],\"TSStringKeyword\":[],\"TSSymbolKeyword\":[],\"TSVoidKeyword\":[],\"TSUndefinedKeyword\":[],\"TSNullKeyword\":[],\"TSNeverKeyword\":[],\"TSThisType\":[],\"TSFunctionType\":[\"typeParameters\",\"typeAnnotation\"],\"TSConstructorType\":[\"typeParameters\",\"typeAnnotation\"],\"TSTypeReference\":[\"typeName\",\"typeParameters\"],\"TSTypePredicate\":[\"parameterName\",\"typeAnnotation\"],\"TSTypeQuery\":[\"exprName\"],\"TSTypeLiteral\":[\"members\"],\"TSArrayType\":[\"elementType\"],\"TSTupleType\":[\"elementTypes\"],\"TSOptionalType\":[\"typeAnnotation\"],\"TSRestType\":[\"typeAnnotation\"],\"TSUnionType\":[\"types\"],\"TSIntersectionType\":[\"types\"],\"TSConditionalType\":[\"checkType\",\"extendsType\",\"trueType\",\"falseType\"],\"TSInferType\":[\"typeParameter\"],\"TSParenthesizedType\":[\"typeAnnotation\"],\"TSTypeOperator\":[\"typeAnnotation\"],\"TSIndexedAccessType\":[\"objectType\",\"indexType\"],\"TSMappedType\":[\"typeParameter\",\"typeAnnotation\"],\"TSLiteralType\":[\"literal\"],\"TSExpressionWithTypeArguments\":[\"expression\",\"typeParameters\"],\"TSInterfaceDeclaration\":[\"id\",\"typeParameters\",\"extends\",\"body\"],\"TSInterfaceBody\":[\"body\"],\"TSTypeAliasDeclaration\":[\"id\",\"typeParameters\",\"typeAnnotation\"],\"TSAsExpression\":[\"expression\",\"typeAnnotation\"],\"TSTypeAssertion\":[\"typeAnnotation\",\"expression\"],\"TSEnumDeclaration\":[\"id\",\"members\"],\"TSEnumMember\":[\"id\",\"initializer\"],\"TSModuleDeclaration\":[\"id\",\"body\"],\"TSModuleBlock\":[\"body\"],\"TSImportType\":[\"argument\",\"qualifier\",\"typeParameters\"],\"TSImportEqualsDeclaration\":[\"id\",\"moduleReference\"],\"TSExternalModuleReference\":[\"expression\"],\"TSNonNullExpression\":[\"expression\"],\"TSExportAssignment\":[\"expression\"],\"TSNamespaceExportDeclaration\":[\"id\"],\"TSTypeAnnotation\":[\"typeAnnotation\"],\"TSTypeParameterInstantiation\":[\"params\"],\"TSTypeParameterDeclaration\":[\"params\"],\"TSTypeParameter\":[\"constraint\",\"default\"]}",
    _pwmeta = function _pwmeta(ptnidx, content, filepath, line, extra) { var version = 2, patterns = [{ pattern: "assert(value, [message])", args: [{ index: 0, name: "value", kind: "mandatory" }, { index: 1, name: "message", kind: "optional", message: true }] }, { pattern: "assert.ok(value, [message])", args: [{ index: 0, name: "value", kind: "mandatory" }, { index: 1, name: "message", kind: "optional", message: true }] }, { pattern: "assert.equal(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.strictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notStrictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory" }, { index: 1, name: "expected", kind: "mandatory" }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.deepEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notDeepEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.deepStrictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.notDeepStrictEqual(actual, expected, [message])", args: [{ index: 0, name: "actual", kind: "mandatory", options: { depth: 2 } }, { index: 1, name: "expected", kind: "mandatory", options: { depth: 2 } }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.throws(fn, [error], [message])", args: [{ index: 0, name: "fn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.doesNotThrow(fn, [error], [message])", args: [{ index: 0, name: "fn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.rejects(asyncFn, [error], [message])", args: [{ index: 0, name: "asyncFn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }, { pattern: "assert.doesNotReject(asyncFn, [error], [message])", args: [{ index: 0, name: "asyncFn", kind: "mandatory", block: true }, { index: 1, name: "error", kind: "optional", block: true }, { index: 2, name: "message", kind: "optional", message: true }] }]; return Object.assign({ version: version, content: content, filepath: filepath, line: line }, extra, patterns[ptnidx]); },
    _am = _pwmeta(0, "assert(hello(...names))", "test/fixtures/SpreadElement/fixture.js", 3, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"hello\",\"range\":[7,12]},\"arguments\":[{\"type\":\"SpreadElement\",\"argument\":{\"type\":\"Identifier\",\"name\":\"names\",\"range\":[16,21]},\"range\":[13,21]}],\"range\":[7,22]}],\"range\":[0,23]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"hello\",\"range\":[7,12]},{\"type\":{\"label\":\"(\"},\"range\":[12,13]},{\"type\":{\"label\":\"...\"},\"range\":[13,16]},{\"type\":{\"label\":\"name\"},\"value\":\"names\",\"range\":[16,21]},{\"type\":{\"label\":\")\"},\"range\":[21,22]},{\"type\":{\"label\":\")\"},\"range\":[22,23]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _ArgumentRecorder = function () { var isPromiseLike = function isPromiseLike(o) { return o !== null && _typeof(o) === "object" && typeof o.then === "function" && typeof o.catch === "function"; }; var mark = function mark(_this, s) { return function () { var args = Array.from(arguments); _this.status = s; _this.value = args.length === 1 ? args[0] : args; }; }; var $Promise$ = function $Promise$(prms) { _classCallCheck(this, $Promise$); this.status = "pending"; prms.then(mark(this, "resolved"), mark(this, "rejected")); }; var wrap = function wrap(v) { return isPromiseLike(v) ? new $Promise$(v) : v; }; var ArgumentRecorder = /*#__PURE__*/ function () { function ArgumentRecorder(callee, am, matchIndex) { _classCallCheck(this, ArgumentRecorder); this._callee = callee; this._am = am; this._logs = []; this._recorded = null; this._val = null; this._idx = matchIndex; var argconf = am.args[matchIndex]; this._isBlock = !!argconf.block; } _createClass(ArgumentRecorder, [{ key: "metadata", value: function metadata() { return this._am; } }, { key: "matchIndex", value: function matchIndex() { return this._idx; } }, { key: "val", value: function val() { return this._val; } }, { key: "_tap", value: function _tap(value, espath) { this._logs.push({ value: wrap(value), espath: espath }); return value; } }, { key: "_rec", value: function _rec(value, espath) { var empowered = this._callee && this._callee._empowered; try { if (!empowered) return value; var log = { value: wrap(value), espath: espath }; this._logs.push(log); if (this._isBlock && empowered && typeof value === "function") { value = new Proxy(value, { apply: function apply(target, thisArg, args) { try { var ret = target.apply(thisArg, args); log.value = wrap(ret); return ret; } catch (e) { log.value = e; throw e; } } }); } this._recorded = { value: value, logs: [].concat(this._logs) }; return this; } finally { this._val = value; this._logs = []; } } }, { key: "eject", value: function eject() { var ret = this._recorded; this._recorded = null; this._val = null; return ret; } }]); return ArgumentRecorder; }(); return ArgumentRecorder; }(),
    _ag = new _ArgumentRecorder(assert, _am, 0),
    _AssertionMessage = function () { var _s = "\n\n      "; var AssertionMessage = /*#__PURE__*/ function () { function AssertionMessage(am, matchIndex, msgOrRec) { _classCallCheck(this, AssertionMessage); this._am = am; this._idx = matchIndex; this._msgOrRec = msgOrRec; } _createClass(AssertionMessage, [{ key: "metadata", value: function metadata() { return this._am; } }, { key: "matchIndex", value: function matchIndex() { return this._idx; } }, { key: "val", value: function val() { if (this._msgOrRec && typeof this._msgOrRec.val === "function") { return this._msgOrRec.val(); } else { return this._msgOrRec; } } }, { key: "eject", value: function eject() { if (this._msgOrRec && typeof this._msgOrRec.eject === "function") { return this._msgOrRec.eject(); } else { return { value: this.val(), logs: [] }; } } }, { key: "toString", value: function toString() { var msg = typeof this._msgOrRec === "string" ? this._msgOrRec : ""; msg += "".concat(_s, "# ").concat(this._am.filepath, ":").concat(this._am.line); msg += "".concat(_s).concat(this._am.content); msg += "".concat(_s, "[WARNING] power-assert is not configured. see: https://github.com/power-assert-js/power-assert"); msg += "\n"; return msg; } }]); return AssertionMessage; }(); return AssertionMessage; }(),
    _am2 = _pwmeta(0, "assert([head, ...tail].length)", "test/fixtures/SpreadElement/fixture.js", 5, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"MemberExpression\",\"object\":{\"type\":\"ArrayExpression\",\"elements\":[{\"type\":\"Identifier\",\"name\":\"head\",\"range\":[8,12]},{\"type\":\"SpreadElement\",\"argument\":{\"type\":\"Identifier\",\"name\":\"tail\",\"range\":[17,21]},\"range\":[14,21]}],\"range\":[7,22]},\"property\":{\"type\":\"Identifier\",\"name\":\"length\",\"range\":[23,29]},\"computed\":false,\"range\":[7,29]}],\"range\":[0,30]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"[\"},\"range\":[7,8]},{\"type\":{\"label\":\"name\"},\"value\":\"head\",\"range\":[8,12]},{\"type\":{\"label\":\",\"},\"range\":[12,13]},{\"type\":{\"label\":\"...\"},\"range\":[14,17]},{\"type\":{\"label\":\"name\"},\"value\":\"tail\",\"range\":[17,21]},{\"type\":{\"label\":\"]\"},\"range\":[21,22]},{\"type\":{\"label\":\".\"},\"range\":[22,23]},{\"type\":{\"label\":\"name\"},\"value\":\"length\",\"range\":[23,29]},{\"type\":{\"label\":\")\"},\"range\":[29,30]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _ag2 = new _ArgumentRecorder(assert, _am2, 0),
    _am3 = _pwmeta(0, "assert(f(head, ...iter(), ...[foo, bar]))", "test/fixtures/SpreadElement/fixture.js", 7, {
  ast: "{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"assert\",\"range\":[0,6]},\"arguments\":[{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"f\",\"range\":[7,8]},\"arguments\":[{\"type\":\"Identifier\",\"name\":\"head\",\"range\":[9,13]},{\"type\":\"SpreadElement\",\"argument\":{\"type\":\"CallExpression\",\"callee\":{\"type\":\"Identifier\",\"name\":\"iter\",\"range\":[18,22]},\"arguments\":[],\"range\":[18,24]},\"range\":[15,24]},{\"type\":\"SpreadElement\",\"argument\":{\"type\":\"ArrayExpression\",\"elements\":[{\"type\":\"Identifier\",\"name\":\"foo\",\"range\":[30,33]},{\"type\":\"Identifier\",\"name\":\"bar\",\"range\":[35,38]}],\"range\":[29,39]},\"range\":[26,39]}],\"range\":[7,40]}],\"range\":[0,41]}",
  tokens: "[{\"type\":{\"label\":\"name\"},\"value\":\"assert\",\"range\":[0,6]},{\"type\":{\"label\":\"(\"},\"range\":[6,7]},{\"type\":{\"label\":\"name\"},\"value\":\"f\",\"range\":[7,8]},{\"type\":{\"label\":\"(\"},\"range\":[8,9]},{\"type\":{\"label\":\"name\"},\"value\":\"head\",\"range\":[9,13]},{\"type\":{\"label\":\",\"},\"range\":[13,14]},{\"type\":{\"label\":\"...\"},\"range\":[15,18]},{\"type\":{\"label\":\"name\"},\"value\":\"iter\",\"range\":[18,22]},{\"type\":{\"label\":\"(\"},\"range\":[22,23]},{\"type\":{\"label\":\")\"},\"range\":[23,24]},{\"type\":{\"label\":\",\"},\"range\":[24,25]},{\"type\":{\"label\":\"...\"},\"range\":[26,29]},{\"type\":{\"label\":\"[\"},\"range\":[29,30]},{\"type\":{\"label\":\"name\"},\"value\":\"foo\",\"range\":[30,33]},{\"type\":{\"label\":\",\"},\"range\":[33,34]},{\"type\":{\"label\":\"name\"},\"value\":\"bar\",\"range\":[35,38]},{\"type\":{\"label\":\"]\"},\"range\":[38,39]},{\"type\":{\"label\":\")\"},\"range\":[39,40]},{\"type\":{\"label\":\")\"},\"range\":[40,41]}]",
  visitorKeys: _powerAssertVisitorKeys
}),
    _ag3 = new _ArgumentRecorder(assert, _am3, 0);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

assert(_ag._rec(hello.apply(void 0, _toConsumableArray(_ag._tap(names, "arguments/0/arguments/0/argument"))), "arguments/0"), new _AssertionMessage(_am, -1));
assert(_ag2._rec(_ag2._tap([_ag2._tap(head, "arguments/0/object/elements/0")].concat(_toConsumableArray(_ag2._tap(tail, "arguments/0/object/elements/1/argument"))), "arguments/0/object").length, "arguments/0"), new _AssertionMessage(_am2, -1));
assert(_ag3._rec(f.apply(void 0, [_ag3._tap(head, "arguments/0/arguments/0")].concat(_toConsumableArray(_ag3._tap(iter(), "arguments/0/arguments/1/argument")), _toConsumableArray(_ag3._tap([_ag3._tap(foo, "arguments/0/arguments/2/argument/elements/0"), _ag3._tap(bar, "arguments/0/arguments/2/argument/elements/1")], "arguments/0/arguments/2/argument")))), "arguments/0"), new _AssertionMessage(_am3, -1));
assert.apply(void 0, _toConsumableArray(iter()));
assert.apply(void 0, [foo, bar]);
