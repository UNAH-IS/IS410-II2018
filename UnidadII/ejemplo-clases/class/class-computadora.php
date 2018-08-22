<?php 

class Computadora {
    //Plain Old Java Object, BEan
    private $marca;
    private $modelo;
    private $color;
    private $procesador;
    private $discoDuro;
    private $resolucion;

    //Constructor
    public function __construct(
        $marca,
        $modelo,
        $color,
        $procesador,
        $discoDuro,
        $resolucion
    ){
        $this->marca = $marca;
        $this->modelo = $modelo;
        $this->color = $color;
        $this->procesador = $procesador;
        $this->discoDuro = $discoDuro;
        $this->resolucion = $resolucion;
    }

    public function setMarca($marca){
        $this->marca = $marca;
    }

    public function getMarca(){
        return $this->marca;
    }

    public function getModelo(){
        return $this->modelo;
    }

    public function encender(){
        echo "Encendiendo";
    }

    public function apagar(){
        echo "Apagando la maquina " . $this->marca;
    }

    public function explotar(){
        echo "Ahhhhhhhhhhhhhhhhhh";
    }

    public function __toString(){
        return $this->marca .",".$this->modelo;
    }
}


?>