<?php

class About extends Controller {
    public function index($nama = "Putriana",$pekerjaan = "siswa rpl",$umur=16)
    {
        $data['nama'] = $nama;
        $data['pekerjaan'] = $pekerjaan;
        $data['umur'] = $umur; 
        $data['judul']= 'About me';
        $this->view('templates/header',$data);
       $this->view('about/index',$data);
       $this->view('templates/footer');
    }
    public function page()
    {
        $data['judul']= 'Page me';
        $this->view('templates/header',$data);
       $this->view('about/page');
       $this->view('templates/footer');
    }
}