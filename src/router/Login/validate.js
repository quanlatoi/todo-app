export default function validate(values){
    let errors = {}
    const xssCatcher = /(\b)(on\S+)(\s*)=|javascript|(<\s*)(\/*)script/;
    const { username, password } = values;
    /*
     * Kiểm tra các trường yêu cầu cần có thông tin
     */
    if(!username || username.trim().length === 0){
        errors.username = 'Bạn chưa nhập tên đăng nhập';
    }
    if(!password || password.trim().length === 0){
        errors.password = 'Bạn chưa nhập mật khẩu';
    }

    /**
     * @descript kiểm tra mã javacript
     */
    if(xssCatcher.test(username)){
        errors.username = 'Do Not Create Javascript Code';
    }

    return errors;
}