$js.compile("$server", null, function($public, $private, $protected, $self) {

    $private.field.server = null;

    $public.void.serve = function() {

        $self.server = $http.createServer(function(_request, _response) {

            if (_request.url == "/") {

                $compiler.index(function(_html) {

                    _response.writeHead(200, { "Content-Type": "text/html" });
                    _response.write(_html);
                    _response.end();

                });

            } else {

                _response.write("OK");
                _response.end();

            }

        });
        $self.server.listen(5000, function() { console.log("Listening port 5000..."); });

    };

});