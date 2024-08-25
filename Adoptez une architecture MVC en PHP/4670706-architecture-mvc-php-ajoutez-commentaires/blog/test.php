<?php
function test()
    {
        throw new Exception('mon exception depuis un fonction');
    }

    function test2()

    {
        test();
    }

try {
    throw new Exception('mon exception');
    echo "Je continue";
} catch (Exception $exception) {
    die($exception->getMessage());
}
