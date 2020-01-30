const xssCatcher = /(\b)(on\S+)(\s*)=|javascript|(<\s*)(\/*)script/;

export default function validateFormTask(values){
    let errors = {}
    const { title, description, nameTab } = values;
    if(!title || title.trim().length === 0){
        errors.title = 'Vui lòng nhập tiêu đề';
    }
    if(xssCatcher.test(title) || xssCatcher.test(description)){
        errors.title = 'Vui lòng không tạo mã javascript';
    }
    if (!nameTab ||nameTab.trim().length === 0) {
        errors.nameTab = 'Vui lòng nhập tên tab';
    }
    if (xssCatcher.test(nameTab)) {
        errors.nameTab = 'Vui lòng không tạo mã javascript';
    }
    return errors;
}
