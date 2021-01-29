$(function() {

    $('.tombolTambahData').on('click', function(){
     $('#formModalLabel').html('Tambah Data Mahasiswa');
     $('.modal-footer button[type=sumbit]').html('Tambah Data');
     $('.modal-body form').attr('action', 'http://localhost/phpmvc/public/mahasiswa/ubah');

    });

$('.tampilModalUbah').on('click', function(){
   

    $('#formModalLabel').html('Ubah Data Mahasiswa');
    $('.modal-footer button[type=sumbit]').html('Ubah Data');
    $('.modal-body form').attr('action', 'http://localhost/phpmvc/public/mahasiswa/ubah');
    

    
    const id = $(this).data('id');
    

    $.ajax({
        url: 'http://localhost/phpmvc/public/mahasiswa/getubah',
        data: {id : id},
        method: 'post', 
        dataType: 'json',
        success: function(data) {
            $('#nama').val(data.nama);
            $('#nrp').val(data.nrp);
            $('#email').val(data.email);
            $('#jurusan').val(data.jurusan);
            $('#id').val(data.id);
           
        }   
    });


});


});


