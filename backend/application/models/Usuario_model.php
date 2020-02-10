<?php

class Usuario_model extends CI_Model{

    public function __construct()
    {
        $this->load->database();
    }

    public function pegarTodos(){
        $query = $this->db->get('usuario');

        return $query->result();
    }

    public function pegar($id){
        $this->db->where('id_usuario', $id);
        $query = $this->db->get('usuario');

        return $query->result();
    }

    public function cadastrar($data){
        $this->db->insert('usuario', $data);
    }
}