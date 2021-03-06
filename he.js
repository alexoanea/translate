'use strict'; /*jshint browser:true, es5:true*/
define(function(){
var E = {
    access_any_site: {message: '!לגשת לכל אתר מכל מדינה'},
    unblocker_site_list: {message: 'רשימת אתרים לפתיחה'},
    settings: {message: 'הגדרות'},
    site_blocked: {message: '$1 חסום?'},
    site_unblocked: {message: '$1 פתוח'},
    more: {message: 'עוד...'},
    not_working_more_options: {message: 'לא עובד? אפשרויות נוספות...'},
    even_more: {message: 'אפילו יותר...'},
    back_to: {message: 'בחזרה אל $1 $2'},
    unblocker: {message: 'פותח'},
    accelerator: {message: 'מאיץ'},
    on: {message: 'פועל'},
    off: {message: 'מכובה'},
    turn_on: {message: 'הפעל כדי להתחיל'},
    unblocker_disabled: {message: 'פותח מנוטרל'},
    enable: {message: 'אפשר'},
    app_name: {message: 'Hola אינטרנט טוב יותר'},
    app_desc: {message: 'גישה לכל האינטרנט! עבור לאתר חסום '+
        '> לחץ על סמל Hola > שינוי דגל מדינה > תהנו!'},
    changing: {message: 'משתנה...'},
    update: {message: 'לעדכן'},
    initializing: {message: 'מאתחל, אנא המתן...'},
    loading: {message: 'טוען'},
    reload: {message: 'לטעון מחדש'},
    old_error: {message: 'גרסה מאוד ישנה של Chrome. <a>update</a> '+
        'Chrome בשביל להשתמש ב Hola'},
    ext_conflict_error: {message:'הגדרות שרת proxy של הרשת מנוהלות '+
        'על ידי שלוחה אחרת. <a>extensions</a >להשבית תוסף להמשיך עם Hola.'},
    start: {message: 'התחל'},
    starting: {message: 'החל ...'},
    try_to_reload: {message: 'נסה <span>רענן</a>'},
    there_is_error: {message: 'נראה שיש שגיאה'},
    reload_hola: {message: 'רענן הולה'},
    verify_internet: {message: 'אמת שיש לך אינטרנט'},
    get_help_skype: {message: 'קבל עזרה ממהנדס על סקייפ: $1'},
    auto_rule_btn: {message: '$1 $2 $3'},
    script_btn: {message: '$1 $2 $3 מהר'},
    country_and_prefix: {message: '$1 ($2)'},
    old_ff: {message: 'גרסה הישנה של פיירפוקס. לחץ <a>כאן</a> לשדרג.'},
    old_ff_missing: {message: '(כמה תכונות Hola אינן זמינות בגרסה שלך)'},
    not_free: {message: 'הגרסה החופשית של הולה צריכה להפעיל אותו מחדש '+
        'כל 4 שעות והוא ממומן על ידי מודעות'},
    not_free_get: {message: 'קבל Hola פלוס עבור שירות בלתי '+
        'מופרע, נטול מודעות'},
    hola_on_other_devices: {message: 'רוצה הולה במכשירים אחרים? '+
        '(Xbox, PS, Apple TV, אייפון ...). לחץ כאן'},
    flag_country: {message: '$1 $2'},
    locale_en: {message: 'אנגלית'},
    locale_es: {message: 'ספרדית'},
    locale_es_419: {message: 'ספרדית, אמריקה הלטינית'},
    locale_ar: {message: 'ערבית'},
    locale_de: {message: 'גרמנית'},
    locale_fr: {message: 'צרפתית'},
    locale_he: {message: 'עברית'},
    locale_id: {message: 'אינדונזי'},
    locale_it: {message: 'האיטלקית'},
    locale_nl: {message: 'הולנדית'},
    locale_pt_BR: {message: 'פורטוגזית'},
    locale_ru: {message: 'רוסית'},
    Australia: {message: 'אוסטרליה'},
    Brazil: {message: 'ברזיל'},
    Canada: {message: 'קנדה'},
    Chile: {message: 'צילה'},
    Denmark: {message: 'דנמרק'},
    Egypt: {message: 'מצריים'},
    France: {message: 'צרפת'},
    Germany: {message: 'גרמניה'},
    'Hong Kong': {message: 'הונג קונג'},
    India: {message: 'הודו'},
    Ireland: {message: 'אירלנד'},
    Italy: {message: 'איטליה'},
    Netherlands: {message: 'הולנד'},
    Poland: {message: 'פולין'},
    Russia: {message: 'רוסיה'},
    Sweden: {message: 'שוודיה'},
    Spain: {message: 'ספרד'},
    Switzerland: {message: 'שוויץ'},
    Singapore: {message: 'סינגפור'},
    Turkey: {message: 'טורקיה'},
    'Great Britain': {message: 'בריטניה'},
    'United States': {message: 'ארצות הברית'},
};

return E; });
