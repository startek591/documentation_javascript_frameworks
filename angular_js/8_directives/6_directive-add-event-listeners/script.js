(function () {
  angular.module("dragModule", []).directive("myDraggable", [
    "$document",
    function ($doucment) {
      return {
        link: function (scope, element, attr) {
          var startX = 0,
            startY = 0,
            x = 0,
            y = 0;

          element.css({
            position: "relative",
            border: "1px solid red",
            backgroundColor: "lightgrey",
            cursor: "pointer",
          });

          element.on("mousedown", function (event) {
            event.preventDefault();
            startX = event.pageX - x;
            startY = event.pageY - y;
            $doucment.on("mousemove", mousemove);
            $doucment.on("mouseup", mouseup);
          });

          function mousemove(event) {
            y = event.pageY - startY;
            x = event.pageX - startX;
            element.css({
              top: y + "px",
              left: x + "px",
            });
          }

          function mouseup() {
            $doucment.off("mousemove", mousemove);
            $doucment.off("mouseup", mouseup);
          }
        },
      };
    },
  ]);
})();
