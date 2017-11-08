app.directive("attrType",attrType);
function attrType() {
    return{
        restrict:"A",
        template:"<div class='jumbotron'>Welcome to custom type attributes</div>"
    }
}