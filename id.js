'use strict'; /*jshint browser:true, es5:true*/
define(function(){
var E = {
    access_any_site: {message: 'Akses situs apapun dari negara manapun!'},
    unblocker_site_list: {message: 'Daftar situs unblocker'},
    settings: {message: 'Pengaturan'},
    site_blocked: {message: '$1 diblokir?'},
    site_unblocked: {message: '$1 diunblock'},
    more: {message: 'lebih...'},
    not_working_more_options: {message: 'tidak jalan? pilihan lain...'},
    even_more: {message: 'bahkan lebih...'},
    back_to: {message: 'kembali ke $1 $2'},
    unblocker: {message: 'Unblocker'},
    accelerator: {message: 'Akselerator'},
    on: {message: 'HIDUP'},
    off: {message: 'MATI'},
    turn_on: {message: 'Aktifkan untuk memulai'},
    unblocker_disabled: {message: 'unblocker dinonaktifkan'},
    enable: {message: 'Enable'},
    app_name: {message: 'Hola Internet Lebih Baik'},
    app_desc: {message: 'Akses SEMUA dari Internet! Pergilah '+
        'ke situs diblokir > klik ikon Hola > ubah bendera negaranya '+
        '> NIKMATI!'},
    changing: {message: 'mengubah...'},
    update: {message: 'Pembaruan'},
    initializing: {message: 'Inisialisasi, mohon tunggu...'},
    loading: {message: 'Memuat'},
    reload: {message: 'Muat ulang'},
    old_error: {message: 'Versi Chrome yang sangat kuno. Chrome untuk '+
       'menggunakan Hola <a>Pembaruan</a>'},
    ext_conflict_error: {message:'Setelan proxy jaringan Anda sedang '+
       'dikelola oleh ekstensi lain. Nonaktifkan ekstensi yang, untuk '+
       'melanjutkan dengan Hola. <a>extensions</a>'},
    start: {message: 'start'},
    starting: {message: 'Mulai...'},
    try_to_reload: {message: 'Cobalah untuk <span>ulang</span>'},
    there_is_error: {message: 'Tampaknya ada kesalahan'},
    reload_hola: {message: 'Reload Hola'},
    verify_internet: {message: 'Verifikasi Anda memiliki Internet'},
    get_help_skype: {message: 'Dapatkan bantuan dari insinyur lebih '+
        'skype: $1'},
    auto_rule_btn: {message: '$1 $2 $3'},
    script_btn: {message: '$1 $2 $3 cepat'},
    country_and_prefix: {message: '$1 ($2)'},
    old_ff: {message: 'Lama versi Firefox. Tekan <a>di sini</a> '+
        'untuk meng-upgrade.'},
    old_ff_missing: {message: '(beberapa fitur Hola tidak tersedia '+
        'pada versi Anda)'},
    not_free: {message: 'Versi gratis dari Hola perlu diaktifkan '+
        'kembali setiap 4 jam dan disponsori oleh iklan.'},
    not_free_get: {message: 'Dapatkan Hola Plus untuk un-sela, '+
        'layanan bebas iklan.'},
    hola_on_other_devices: {message: 'Ingin Hola pada perangkat lain? '+
        '(Xbox, PS, Apple TV, iPhone ...). Klik di sini'},
    flag_country: {message: '$1 $2'},
    locale_en: {message: 'Inggris'},
    locale_es: {message: 'Spanyol'},
    locale_es_419: {message: 'Spanyol, Amerika Latin'},
    locale_ar: {message: 'Arab'},
    locale_de: {message: 'Jerman'},
    locale_fr: {message: 'Perancis'},
    locale_he: {message: 'Ibrani'},
    locale_id: {message: 'Indonesia'},
    locale_it: {message: 'Italia'},
    locale_nl: {message: 'Belanda'},
    locale_pt_BR: {message: 'Portugis'},
    locale_ru: {message: 'Rusia'},
    Australia: {message: 'Australia'},
    Brazil: {message: 'Brasil'},
    Canada: {message: 'Kanada'},
    Chile: {message: 'Chile'},
    Denmark: {message: 'Denmark'},
    Egypt: {message: 'Mesir'},
    France: {message: 'Perancis'},
    Germany: {message: 'Jerman'},
    'Hong Kong': {message: 'Hongkong'},
    India: {message: 'India'},
    Ireland: {message: 'Irlandia'},
    Italy: {message: 'Italia'},
    Netherlands: {message: 'Belanda'},
    Poland: {message: 'Polandia'},
    Russia: {message: 'Rusia'},
    Singapore: {message: 'Singapura'},
    Spain: {message: 'Spanyol'},
    Sweden: {message: 'Swedia'},
    Switzerland: {message: 'Swiss'},
    Turkey: {message: 'Turki'},
    'Great Britain': {message: 'Kerajaan Britania Raya'},
    'United States': {message: 'Amerika Serikat '},
};

return E; });
