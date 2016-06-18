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

assert(_rec._expr(_rec._capt(falsyStr, 'arguments/0'), {
  content: 'assert(falsyStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 3,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"Identifier","name":"falsyStr","range":[7,15]}],"range":[0,16]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"falsyStr","range":[7,15]},{"type":{"label":")"},"range":[15,16]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec2._expr(_rec2._capt(falsyStr, 'arguments/0'), {
  content: 'assert(falsyStr, messageStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 5,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"Identifier","name":"falsyStr","range":[7,15]},{"type":"Identifier","name":"messageStr","range":[17,27]}],"range":[0,28]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"falsyStr","range":[7,15]},{"type":{"label":","},"range":[15,16]},{"type":{"label":"name"},"value":"messageStr","range":[17,27]},{"type":{"label":")"},"range":[27,28]}]',
  visitorKeys: _powerAssertVisitorKeys
}), messageStr);

assert.equal(_rec3._expr(_rec3._capt(str, 'arguments/0'), {
  content: 'assert.equal(str, anotherStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 7,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"Identifier","name":"str","range":[13,16]},{"type":"Identifier","name":"anotherStr","range":[18,28]}],"range":[0,29]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"name"},"value":"str","range":[13,16]},{"type":{"label":","},"range":[16,17]},{"type":{"label":"name"},"value":"anotherStr","range":[18,28]},{"type":{"label":")"},"range":[28,29]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec4._expr(_rec4._capt(anotherStr, 'arguments/1'), {
  content: 'assert.equal(str, anotherStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 7,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"Identifier","name":"str","range":[13,16]},{"type":"Identifier","name":"anotherStr","range":[18,28]}],"range":[0,29]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"name"},"value":"str","range":[13,16]},{"type":{"label":","},"range":[16,17]},{"type":{"label":"name"},"value":"anotherStr","range":[18,28]},{"type":{"label":")"},"range":[28,29]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert.equal(_rec5._expr(_rec5._capt(str, 'arguments/0'), {
  content: 'assert.equal(str, anotherStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 9,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"Identifier","name":"str","range":[13,16]},{"type":"Identifier","name":"anotherStr","range":[18,28]}],"range":[0,29]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"name"},"value":"str","range":[13,16]},{"type":{"label":","},"range":[16,17]},{"type":{"label":"name"},"value":"anotherStr","range":[18,28]},{"type":{"label":")"},"range":[28,29]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec6._expr(_rec6._capt(anotherStr, 'arguments/1'), {
  content: 'assert.equal(str, anotherStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 9,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"Identifier","name":"str","range":[13,16]},{"type":"Identifier","name":"anotherStr","range":[18,28]}],"range":[0,29]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"name"},"value":"str","range":[13,16]},{"type":{"label":","},"range":[16,17]},{"type":{"label":"name"},"value":"anotherStr","range":[18,28]},{"type":{"label":")"},"range":[28,29]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert.equal(_rec7._expr(_rec7._capt(str, 'arguments/0'), {
  content: 'assert.equal(str, anotherStr, messageStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 14,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"Identifier","name":"str","range":[13,16]},{"type":"Identifier","name":"anotherStr","range":[18,28]},{"type":"Identifier","name":"messageStr","range":[30,40]}],"range":[0,41]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"name"},"value":"str","range":[13,16]},{"type":{"label":","},"range":[16,17]},{"type":{"label":"name"},"value":"anotherStr","range":[18,28]},{"type":{"label":","},"range":[28,29]},{"type":{"label":"name"},"value":"messageStr","range":[30,40]},{"type":{"label":")"},"range":[40,41]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec8._expr(_rec8._capt(anotherStr, 'arguments/1'), {
  content: 'assert.equal(str, anotherStr, messageStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 14,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"Identifier","name":"str","range":[13,16]},{"type":"Identifier","name":"anotherStr","range":[18,28]},{"type":"Identifier","name":"messageStr","range":[30,40]}],"range":[0,41]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"name"},"value":"str","range":[13,16]},{"type":{"label":","},"range":[16,17]},{"type":{"label":"name"},"value":"anotherStr","range":[18,28]},{"type":{"label":","},"range":[28,29]},{"type":{"label":"name"},"value":"messageStr","range":[30,40]},{"type":{"label":")"},"range":[40,41]}]',
  visitorKeys: _powerAssertVisitorKeys
}), messageStr);

assert.equal(_rec9._expr(_rec9._capt(str, 'arguments/0'), {
  content: 'assert.equal(str, anotherStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 16,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"Identifier","name":"str","range":[13,16]},{"type":"Identifier","name":"anotherStr","range":[18,28]}],"range":[0,29]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"name"},"value":"str","range":[13,16]},{"type":{"label":","},"range":[16,17]},{"type":{"label":"name"},"value":"anotherStr","range":[18,28]},{"type":{"label":")"},"range":[28,29]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec10._expr(_rec10._capt(anotherStr, 'arguments/1'), {
  content: 'assert.equal(str, anotherStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 16,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"Identifier","name":"str","range":[13,16]},{"type":"Identifier","name":"anotherStr","range":[18,28]}],"range":[0,29]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"name"},"value":"str","range":[13,16]},{"type":{"label":","},"range":[16,17]},{"type":{"label":"name"},"value":"anotherStr","range":[18,28]},{"type":{"label":")"},"range":[28,29]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert.equal(_rec11._expr(_rec11._capt(str, 'arguments/0'), {
  content: 'assert.equal(str, yetAnotherStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 21,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"Identifier","name":"str","range":[13,16]},{"type":"Identifier","name":"yetAnotherStr","range":[18,31]}],"range":[0,32]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"name"},"value":"str","range":[13,16]},{"type":{"label":","},"range":[16,17]},{"type":{"label":"name"},"value":"yetAnotherStr","range":[18,31]},{"type":{"label":")"},"range":[31,32]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec12._expr(_rec12._capt(yetAnotherStr, 'arguments/1'), {
  content: 'assert.equal(str, yetAnotherStr)',
  filepath: 'test/fixtures/Identifier/fixture.js',
  line: 21,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"Identifier","name":"str","range":[13,16]},{"type":"Identifier","name":"yetAnotherStr","range":[18,31]}],"range":[0,32]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"name"},"value":"str","range":[13,16]},{"type":{"label":","},"range":[16,17]},{"type":{"label":"name"},"value":"yetAnotherStr","range":[18,31]},{"type":{"label":")"},"range":[31,32]}]',
  visitorKeys: _powerAssertVisitorKeys
}));
