app.directive("elemType",elemType);
function elemType() {
    return{
        restrict:"E",
        template:"<div class='jumbotron'>Welcome to custom type attributes</div>"
    }
}