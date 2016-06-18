'use strict';

var _powerAssertVisitorKeys = '{"ArrayExpression":["elements"],"AssignmentExpression":["left","right"],"BinaryExpression":["left","right"],"Directive":["value"],"DirectiveLiteral":[],"BlockStatement":["directives","body"],"BreakStatement":["label"],"CallExpression":["callee","arguments"],"CatchClause":["param","body"],"ConditionalExpression":["test","consequent","alternate"],"ContinueStatement":["label"],"DebuggerStatement":[],"DoWhileStatement":["test","body"],"EmptyStatement":[],"ExpressionStatement":["expression"],"File":["program"],"ForInStatement":["left","right","body"],"ForStatement":["init","test","update","body"],"FunctionDeclaration":["id","params","body","returnType","typeParameters"],"FunctionExpression":["id","params","body","returnType","typeParameters"],"Identifier":["typeAnnotation"],"IfStatement":["test","consequent","alternate"],"LabeledStatement":["label","body"],"StringLiteral":[],"NumericLiteral":[],"NullLiteral":[],"BooleanLiteral":[],"RegExpLiteral":[],"LogicalExpression":["left","right"],"MemberExpression":["object","property"],"NewExpression":["callee","arguments"],"Program":["directives","body"],"ObjectExpression":["properties"],"ObjectMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectProperty":["key","value","decorators"],"RestElement":["argument","typeAnnotation"],"ReturnStatement":["argument"],"SequenceExpression":["expressions"],"SwitchCase":["test","consequent"],"SwitchStatement":["discriminant","cases"],"ThisExpression":[],"ThrowStatement":["argument"],"TryStatement":["block","handler","finalizer"],"UnaryExpression":["argument"],"UpdateExpression":["argument"],"VariableDeclaration":["declarations"],"VariableDeclarator":["id","init"],"WhileStatement":["test","body"],"WithStatement":["object","body"],"AssignmentPattern":["left","right"],"ArrayPattern":["elements","typeAnnotation"],"ArrowFunctionExpression":["params","body","returnType"],"ClassBody":["body"],"ClassDeclaration":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ClassExpression":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ExportAllDeclaration":["source"],"ExportDefaultDeclaration":["declaration"],"ExportNamedDeclaration":["declaration","specifiers","source"],"ExportSpecifier":["local","exported"],"ForOfStatement":["left","right","body"],"ImportDeclaration":["specifiers","source"],"ImportDefaultSpecifier":["local"],"ImportNamespaceSpecifier":["local"],"ImportSpecifier":["local","imported"],"MetaProperty":["meta","property"],"ClassMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectPattern":["properties","typeAnnotation"],"SpreadElement":["argument"],"Super":[],"TaggedTemplateExpression":["tag","quasi"],"TemplateElement":[],"TemplateLiteral":["quasis","expressions"],"YieldExpression":["argument"],"AnyTypeAnnotation":[],"ArrayTypeAnnotation":["elementType"],"BooleanTypeAnnotation":[],"BooleanLiteralTypeAnnotation":[],"NullLiteralTypeAnnotation":[],"ClassImplements":["id","typeParameters"],"ClassProperty":["key","value","typeAnnotation","decorators"],"DeclareClass":["id","typeParameters","extends","body"],"DeclareFunction":["id"],"DeclareInterface":["id","typeParameters","extends","body"],"DeclareModule":["id","body"],"DeclareTypeAlias":["id","typeParameters","right"],"DeclareVariable":["id"],"ExistentialTypeParam":[],"FunctionTypeAnnotation":["typeParameters","params","rest","returnType"],"FunctionTypeParam":["name","typeAnnotation"],"GenericTypeAnnotation":["id","typeParameters"],"InterfaceExtends":["id","typeParameters"],"InterfaceDeclaration":["id","typeParameters","extends","body"],"IntersectionTypeAnnotation":["types"],"MixedTypeAnnotation":[],"NullableTypeAnnotation":["typeAnnotation"],"NumericLiteralTypeAnnotation":[],"NumberTypeAnnotation":[],"StringLiteralTypeAnnotation":[],"StringTypeAnnotation":[],"ThisTypeAnnotation":[],"TupleTypeAnnotation":["types"],"TypeofTypeAnnotation":["argument"],"TypeAlias":["id","typeParameters","right"],"TypeAnnotation":["typeAnnotation"],"TypeCastExpression":["expression","typeAnnotation"],"TypeParameter":["bound"],"TypeParameterDeclaration":["params"],"TypeParameterInstantiation":["params"],"ObjectTypeAnnotation":["properties","indexers","callProperties"],"ObjectTypeCallProperty":["value"],"ObjectTypeIndexer":["id","key","value"],"ObjectTypeProperty":["key","value"],"QualifiedTypeIdentifier":["id","qualification"],"UnionTypeAnnotation":["types"],"VoidTypeAnnotation":[],"JSXAttribute":["name","value"],"JSXClosingElement":["name"],"JSXElement":["openingElement","children","closingElement"],"JSXEmptyExpression":[],"JSXExpressionContainer":["expression"],"JSXIdentifier":[],"JSXMemberExpression":["object","property"],"JSXNamespacedName":["namespace","name"],"JSXOpeningElement":["name","attributes"],"JSXSpreadAttribute":["argument"],"JSXText":[],"Noop":[],"ParenthesizedExpression":["expression"],"AwaitExpression":["argument"],"BindExpression":["object","callee"],"Decorator":["expression"],"DoExpression":["body"],"ExportDefaultSpecifier":["exported"],"ExportNamespaceSpecifier":["exported"],"RestProperty":["argument"],"SpreadProperty":["argument"]}',
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { return { powerAssertContext: { value: value, events: this.captured }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder(),
    _rec6 = new _powerAssertRecorder(),
    _rec7 = new _powerAssertRecorder(),
    _rec8 = new _powerAssertRecorder(),
    _rec9 = new _powerAssertRecorder(),
    _rec10 = new _powerAssertRecorder(),
    _rec11 = new _powerAssertRecorder(),
    _rec12 = new _powerAssertRecorder();

assert(_rec._expr(_rec._capt(func(), 'arguments/0'), {
  content: 'assert(func())',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 3,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"CallExpression","callee":{"type":"Identifier","name":"func","range":[7,11]},"arguments":[],"range":[7,13]}],"range":[0,14]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"func","range":[7,11]},{"type":{"label":"("},"range":[11,12]},{"type":{"label":")"},"range":[12,13]},{"type":{"label":")"},"range":[13,14]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec2._expr(_rec2._capt(_rec2._capt(obj, 'arguments/0/callee/object').age(), 'arguments/0'), {
  content: 'assert(obj.age())',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 5,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"obj","range":[7,10]},"property":{"type":"Identifier","name":"age","range":[11,14]},"computed":false,"range":[7,14]},"arguments":[],"range":[7,16]}],"range":[0,17]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"obj","range":[7,10]},{"type":{"label":"."},"range":[10,11]},{"type":{"label":"name"},"value":"age","range":[11,14]},{"type":{"label":"("},"range":[14,15]},{"type":{"label":")"},"range":[15,16]},{"type":{"label":")"},"range":[16,17]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec3._expr(_rec3._capt(isFalsy(_rec3._capt(positiveInt, 'arguments/0/arguments/0')), 'arguments/0'), {
  content: 'assert(isFalsy(positiveInt))',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 7,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"CallExpression","callee":{"type":"Identifier","name":"isFalsy","range":[7,14]},"arguments":[{"type":"Identifier","name":"positiveInt","range":[15,26]}],"range":[7,27]}],"range":[0,28]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"isFalsy","range":[7,14]},{"type":{"label":"("},"range":[14,15]},{"type":{"label":"name"},"value":"positiveInt","range":[15,26]},{"type":{"label":")"},"range":[26,27]},{"type":{"label":")"},"range":[27,28]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec4._expr(_rec4._capt(_rec4._capt(foo, 'arguments/0/callee/object')[_rec4._capt(propName, 'arguments/0/callee/property')](), 'arguments/0'), {
  content: 'assert(foo[propName]())',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 9,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[7,10]},"property":{"type":"Identifier","name":"propName","range":[11,19]},"computed":true,"range":[7,20]},"arguments":[],"range":[7,22]}],"range":[0,23]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"foo","range":[7,10]},{"type":{"label":"["},"range":[10,11]},{"type":{"label":"name"},"value":"propName","range":[11,19]},{"type":{"label":"]"},"range":[19,20]},{"type":{"label":"("},"range":[20,21]},{"type":{"label":")"},"range":[21,22]},{"type":{"label":")"},"range":[22,23]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec5._expr(_rec5._capt(_rec5._capt(foo, 'arguments/0/callee/object')[_rec5._capt(_rec5._capt(hoge, 'arguments/0/callee/property/object')[_rec5._capt(_rec5._capt(fuga, 'arguments/0/callee/property/property/object')[_rec5._capt(piyo, 'arguments/0/callee/property/property/property')], 'arguments/0/callee/property/property')], 'arguments/0/callee/property')](), 'arguments/0'), {
  content: 'assert(foo[hoge[fuga[piyo]]]())',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 11,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[7,10]},"property":{"type":"MemberExpression","object":{"type":"Identifier","name":"hoge","range":[11,15]},"property":{"type":"MemberExpression","object":{"type":"Identifier","name":"fuga","range":[16,20]},"property":{"type":"Identifier","name":"piyo","range":[21,25]},"computed":true,"range":[16,26]},"computed":true,"range":[11,27]},"computed":true,"range":[7,28]},"arguments":[],"range":[7,30]}],"range":[0,31]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"foo","range":[7,10]},{"type":{"label":"["},"range":[10,11]},{"type":{"label":"name"},"value":"hoge","range":[11,15]},{"type":{"label":"["},"range":[15,16]},{"type":{"label":"name"},"value":"fuga","range":[16,20]},{"type":{"label":"["},"range":[20,21]},{"type":{"label":"name"},"value":"piyo","range":[21,25]},{"type":{"label":"]"},"range":[25,26]},{"type":{"label":"]"},"range":[26,27]},{"type":{"label":"]"},"range":[27,28]},{"type":{"label":"("},"range":[28,29]},{"type":{"label":")"},"range":[29,30]},{"type":{"label":")"},"range":[30,31]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec6._expr(_rec6._capt(_rec6._capt(sum(_rec6._capt(one, 'arguments/0/left/arguments/0'), _rec6._capt(two, 'arguments/0/left/arguments/1'), _rec6._capt(three, 'arguments/0/left/arguments/2')), 'arguments/0/left') === _rec6._capt(seven, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(sum(one, two, three) === seven)',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 13,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"===","left":{"type":"CallExpression","callee":{"type":"Identifier","name":"sum","range":[7,10]},"arguments":[{"type":"Identifier","name":"one","range":[11,14]},{"type":"Identifier","name":"two","range":[16,19]},{"type":"Identifier","name":"three","range":[21,26]}],"range":[7,27]},"right":{"type":"Identifier","name":"seven","range":[32,37]},"range":[7,37]}],"range":[0,38]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"sum","range":[7,10]},{"type":{"label":"("},"range":[10,11]},{"type":{"label":"name"},"value":"one","range":[11,14]},{"type":{"label":","},"range":[14,15]},{"type":{"label":"name"},"value":"two","range":[16,19]},{"type":{"label":","},"range":[19,20]},{"type":{"label":"name"},"value":"three","range":[21,26]},{"type":{"label":")"},"range":[26,27]},{"type":{"label":"==/!="},"value":"===","range":[28,31]},{"type":{"label":"name"},"value":"seven","range":[32,37]},{"type":{"label":")"},"range":[37,38]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec7._expr(_rec7._capt(_rec7._capt(sum(_rec7._capt(sum(_rec7._capt(one, 'arguments/0/left/arguments/0/arguments/0'), _rec7._capt(two, 'arguments/0/left/arguments/0/arguments/1')), 'arguments/0/left/arguments/0'), _rec7._capt(three, 'arguments/0/left/arguments/1')), 'arguments/0/left') === _rec7._capt(sum(_rec7._capt(sum(_rec7._capt(two, 'arguments/0/right/arguments/0/arguments/0'), _rec7._capt(three, 'arguments/0/right/arguments/0/arguments/1')), 'arguments/0/right/arguments/0'), _rec7._capt(seven, 'arguments/0/right/arguments/1')), 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(sum(sum(one, two), three) === sum(sum(two, three), seven))',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 15,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"===","left":{"type":"CallExpression","callee":{"type":"Identifier","name":"sum","range":[7,10]},"arguments":[{"type":"CallExpression","callee":{"type":"Identifier","name":"sum","range":[11,14]},"arguments":[{"type":"Identifier","name":"one","range":[15,18]},{"type":"Identifier","name":"two","range":[20,23]}],"range":[11,24]},{"type":"Identifier","name":"three","range":[26,31]}],"range":[7,32]},"right":{"type":"CallExpression","callee":{"type":"Identifier","name":"sum","range":[37,40]},"arguments":[{"type":"CallExpression","callee":{"type":"Identifier","name":"sum","range":[41,44]},"arguments":[{"type":"Identifier","name":"two","range":[45,48]},{"type":"Identifier","name":"three","range":[50,55]}],"range":[41,56]},{"type":"Identifier","name":"seven","range":[58,63]}],"range":[37,64]},"range":[7,64]}],"range":[0,65]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"sum","range":[7,10]},{"type":{"label":"("},"range":[10,11]},{"type":{"label":"name"},"value":"sum","range":[11,14]},{"type":{"label":"("},"range":[14,15]},{"type":{"label":"name"},"value":"one","range":[15,18]},{"type":{"label":","},"range":[18,19]},{"type":{"label":"name"},"value":"two","range":[20,23]},{"type":{"label":")"},"range":[23,24]},{"type":{"label":","},"range":[24,25]},{"type":{"label":"name"},"value":"three","range":[26,31]},{"type":{"label":")"},"range":[31,32]},{"type":{"label":"==/!="},"value":"===","range":[33,36]},{"type":{"label":"name"},"value":"sum","range":[37,40]},{"type":{"label":"("},"range":[40,41]},{"type":{"label":"name"},"value":"sum","range":[41,44]},{"type":{"label":"("},"range":[44,45]},{"type":{"label":"name"},"value":"two","range":[45,48]},{"type":{"label":","},"range":[48,49]},{"type":{"label":"name"},"value":"three","range":[50,55]},{"type":{"label":")"},"range":[55,56]},{"type":{"label":","},"range":[56,57]},{"type":{"label":"name"},"value":"seven","range":[58,63]},{"type":{"label":")"},"range":[63,64]},{"type":{"label":")"},"range":[64,65]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec8._expr(_rec8._capt(_rec8._capt(_rec8._capt(_rec8._capt(math, 'arguments/0/left/callee/object/object').calc, 'arguments/0/left/callee/object').sum(_rec8._capt(one, 'arguments/0/left/arguments/0'), _rec8._capt(two, 'arguments/0/left/arguments/1'), _rec8._capt(three, 'arguments/0/left/arguments/2')), 'arguments/0/left') === _rec8._capt(seven, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(math.calc.sum(one, two, three) === seven)',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 17,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"===","left":{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"MemberExpression","object":{"type":"Identifier","name":"math","range":[7,11]},"property":{"type":"Identifier","name":"calc","range":[12,16]},"computed":false,"range":[7,16]},"property":{"type":"Identifier","name":"sum","range":[17,20]},"computed":false,"range":[7,20]},"arguments":[{"type":"Identifier","name":"one","range":[21,24]},{"type":"Identifier","name":"two","range":[26,29]},{"type":"Identifier","name":"three","range":[31,36]}],"range":[7,37]},"right":{"type":"Identifier","name":"seven","range":[42,47]},"range":[7,47]}],"range":[0,48]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"math","range":[7,11]},{"type":{"label":"."},"range":[11,12]},{"type":{"label":"name"},"value":"calc","range":[12,16]},{"type":{"label":"."},"range":[16,17]},{"type":{"label":"name"},"value":"sum","range":[17,20]},{"type":{"label":"("},"range":[20,21]},{"type":{"label":"name"},"value":"one","range":[21,24]},{"type":{"label":","},"range":[24,25]},{"type":{"label":"name"},"value":"two","range":[26,29]},{"type":{"label":","},"range":[29,30]},{"type":{"label":"name"},"value":"three","range":[31,36]},{"type":{"label":")"},"range":[36,37]},{"type":{"label":"==/!="},"value":"===","range":[38,41]},{"type":{"label":"name"},"value":"seven","range":[42,47]},{"type":{"label":")"},"range":[47,48]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec9._expr(_rec9._capt(_rec9._capt(_rec9._capt(three, 'arguments/0/left/left') * _rec9._capt(_rec9._capt(seven, 'arguments/0/left/right/left') * _rec9._capt(ten, 'arguments/0/left/right/right'), 'arguments/0/left/right'), 'arguments/0/left') === _rec9._capt(three, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(three * (seven * ten) === three)',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 19,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"===","left":{"type":"BinaryExpression","operator":"*","left":{"type":"Identifier","name":"three","range":[7,12]},"right":{"type":"BinaryExpression","operator":"*","left":{"type":"Identifier","name":"seven","range":[16,21]},"right":{"type":"Identifier","name":"ten","range":[24,27]},"range":[16,27]},"range":[7,28]},"right":{"type":"Identifier","name":"three","range":[33,38]},"range":[7,38]}],"range":[0,39]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"three","range":[7,12]},{"type":{"label":"*"},"value":"*","range":[13,14]},{"type":{"label":"("},"range":[15,16]},{"type":{"label":"name"},"value":"seven","range":[16,21]},{"type":{"label":"*"},"value":"*","range":[22,23]},{"type":{"label":"name"},"value":"ten","range":[24,27]},{"type":{"label":")"},"range":[27,28]},{"type":{"label":"==/!="},"value":"===","range":[29,32]},{"type":{"label":"name"},"value":"three","range":[33,38]},{"type":{"label":")"},"range":[38,39]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec10._expr(_rec10._capt(!_rec10._capt(concat(_rec10._capt(fuga, 'arguments/0/argument/arguments/0'), _rec10._capt(piyo, 'arguments/0/argument/arguments/1')), 'arguments/0/argument'), 'arguments/0'), {
  content: 'assert(!concat(fuga, piyo))',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 21,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"UnaryExpression","operator":"!","argument":{"type":"CallExpression","callee":{"type":"Identifier","name":"concat","range":[8,14]},"arguments":[{"type":"Identifier","name":"fuga","range":[15,19]},{"type":"Identifier","name":"piyo","range":[21,25]}],"range":[8,26]},"prefix":true,"range":[7,26]}],"range":[0,27]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"prefix"},"value":"!","range":[7,8]},{"type":{"label":"name"},"value":"concat","range":[8,14]},{"type":{"label":"("},"range":[14,15]},{"type":{"label":"name"},"value":"fuga","range":[15,19]},{"type":{"label":","},"range":[19,20]},{"type":{"label":"name"},"value":"piyo","range":[21,25]},{"type":{"label":")"},"range":[25,26]},{"type":{"label":")"},"range":[26,27]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert.strictEqual(_rec11._expr(_rec11._capt(_rec11._capt(three, 'arguments/0/left') * _rec11._capt(_rec11._capt(seven, 'arguments/0/right/left') * _rec11._capt(ten, 'arguments/0/right/right'), 'arguments/0/right'), 'arguments/0'), {
  content: 'assert.strictEqual(three * (seven * ten), math.calc.sum(one, two, three))',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 23,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"strictEqual","range":[7,18]},"computed":false,"range":[0,18]},"arguments":[{"type":"BinaryExpression","operator":"*","left":{"type":"Identifier","name":"three","range":[19,24]},"right":{"type":"BinaryExpression","operator":"*","left":{"type":"Identifier","name":"seven","range":[28,33]},"right":{"type":"Identifier","name":"ten","range":[36,39]},"range":[28,39]},"range":[19,40]},{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"MemberExpression","object":{"type":"Identifier","name":"math","range":[42,46]},"property":{"type":"Identifier","name":"calc","range":[47,51]},"computed":false,"range":[42,51]},"property":{"type":"Identifier","name":"sum","range":[52,55]},"computed":false,"range":[42,55]},"arguments":[{"type":"Identifier","name":"one","range":[56,59]},{"type":"Identifier","name":"two","range":[61,64]},{"type":"Identifier","name":"three","range":[66,71]}],"range":[42,72]}],"range":[0,73]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"strictEqual","range":[7,18]},{"type":{"label":"("},"range":[18,19]},{"type":{"label":"name"},"value":"three","range":[19,24]},{"type":{"label":"*"},"value":"*","range":[25,26]},{"type":{"label":"("},"range":[27,28]},{"type":{"label":"name"},"value":"seven","range":[28,33]},{"type":{"label":"*"},"value":"*","range":[34,35]},{"type":{"label":"name"},"value":"ten","range":[36,39]},{"type":{"label":")"},"range":[39,40]},{"type":{"label":","},"range":[40,41]},{"type":{"label":"name"},"value":"math","range":[42,46]},{"type":{"label":"."},"range":[46,47]},{"type":{"label":"name"},"value":"calc","range":[47,51]},{"type":{"label":"."},"range":[51,52]},{"type":{"label":"name"},"value":"sum","range":[52,55]},{"type":{"label":"("},"range":[55,56]},{"type":{"label":"name"},"value":"one","range":[56,59]},{"type":{"label":","},"range":[59,60]},{"type":{"label":"name"},"value":"two","range":[61,64]},{"type":{"label":","},"range":[64,65]},{"type":{"label":"name"},"value":"three","range":[66,71]},{"type":{"label":")"},"range":[71,72]},{"type":{"label":")"},"range":[72,73]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec12._expr(_rec12._capt(_rec12._capt(_rec12._capt(math, 'arguments/1/callee/object/object').calc, 'arguments/1/callee/object').sum(_rec12._capt(one, 'arguments/1/arguments/0'), _rec12._capt(two, 'arguments/1/arguments/1'), _rec12._capt(three, 'arguments/1/arguments/2')), 'arguments/1'), {
  content: 'assert.strictEqual(three * (seven * ten), math.calc.sum(one, two, three))',
  filepath: 'test/fixtures/CallExpression/fixture.js',
  line: 23,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"strictEqual","range":[7,18]},"computed":false,"range":[0,18]},"arguments":[{"type":"BinaryExpression","operator":"*","left":{"type":"Identifier","name":"three","range":[19,24]},"right":{"type":"BinaryExpression","operator":"*","left":{"type":"Identifier","name":"seven","range":[28,33]},"right":{"type":"Identifier","name":"ten","range":[36,39]},"range":[28,39]},"range":[19,40]},{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"MemberExpression","object":{"type":"Identifier","name":"math","range":[42,46]},"property":{"type":"Identifier","name":"calc","range":[47,51]},"computed":false,"range":[42,51]},"property":{"type":"Identifier","name":"sum","range":[52,55]},"computed":false,"range":[42,55]},"arguments":[{"type":"Identifier","name":"one","range":[56,59]},{"type":"Identifier","name":"two","range":[61,64]},{"type":"Identifier","name":"three","range":[66,71]}],"range":[42,72]}],"range":[0,73]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"strictEqual","range":[7,18]},{"type":{"label":"("},"range":[18,19]},{"type":{"label":"name"},"value":"three","range":[19,24]},{"type":{"label":"*"},"value":"*","range":[25,26]},{"type":{"label":"("},"range":[27,28]},{"type":{"label":"name"},"value":"seven","range":[28,33]},{"type":{"label":"*"},"value":"*","range":[34,35]},{"type":{"label":"name"},"value":"ten","range":[36,39]},{"type":{"label":")"},"range":[39,40]},{"type":{"label":","},"range":[40,41]},{"type":{"label":"name"},"value":"math","range":[42,46]},{"type":{"label":"."},"range":[46,47]},{"type":{"label":"name"},"value":"calc","range":[47,51]},{"type":{"label":"."},"range":[51,52]},{"type":{"label":"name"},"value":"sum","range":[52,55]},{"type":{"label":"("},"range":[55,56]},{"type":{"label":"name"},"value":"one","range":[56,59]},{"type":{"label":","},"range":[59,60]},{"type":{"label":"name"},"value":"two","range":[61,64]},{"type":{"label":","},"range":[64,65]},{"type":{"label":"name"},"value":"three","range":[66,71]},{"type":{"label":")"},"range":[71,72]},{"type":{"label":")"},"range":[72,73]}]',
  visitorKeys: _powerAssertVisitorKeys
}));
