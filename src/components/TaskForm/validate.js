export default function validate(values){
    let errors = {}
    const xssCatcher = /(\b)(on\S+)(\s*)=|javascript|(<\s*)(\/*)script/;
    const { title, description } = values;
    if(!title || title.trim().length === 0){
        errors.title = 'Vui lòng nhập tiêu đề';
    }
    if(xssCatcher.test(title) || xssCatcher.test(description)){
        errors.title = 'Vui lòng không tạo mã javascript';
    }
    return errors;
}