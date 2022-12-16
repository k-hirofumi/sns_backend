import { isEmpty } from "lodash";

export const validator = validatorFunction;
//errorがあればtrue
function validatorFunction <T>(setMessageState: (value: React.SetStateAction<ErrorMessage>) => void, rulesOfInputs: T, inputs: T)  {
    /* 例
    rulesOfInputs = {
        email: ["required", "email"],
        password: ["required"]
    }

    inputs = {
        email: "test@test.com",
        passowrd: "123456"
    }
    */
    for(let key in rulesOfInputs){
        let rulesOfInput = rulesOfInputs[key] as Array<string>  //email: ["required", "email"]    password: ["required"]
        let input = inputs[key] as any                        //email: "test@test.com"     passowrd: "123456"
        for(let i in rulesOfInput){  
            let inputName = VALIDATION_TRANSLATER[key as keyof ValidationTranslater] //keyを日本語に変換
            let errorMessage = ""
            switch (rulesOfInput[i]) { //"required"    "email"

/*ここより下にバリデーションを追加してください*/
                case "required":
                    if(!input) errorMessage = inputName+"が入力されていません。";
                    break;
                case "email":
                    if(!/\S+@\S+\.\S+/.test(input)) errorMessage = inputName+"の形式が正しくありません。"
                    break
                case "number":
                    if(typeof input != "number") errorMessage = inputName+"が数値ではありません";
                    break;   
                    
                    
/*END*/              
                default:
                    break;
            }

            if(errorMessage){
                setMessageState({target:key, message:errorMessage})
                return true; 
            }
        }
    }
    return false
}

//入力情報の日本語変換
const VALIDATION_TRANSLATER: ValidationTranslater = {
    email: "メールアドレス",
    password: "パスワード",
    name: "名前",
    user_name: "ユーザ名",
    staff_name: "スタッフ名"
}
type ValidationTranslater = {
    email: string,
    password: string,
    name: string,
    user_name: string,
    staff_name: string
}