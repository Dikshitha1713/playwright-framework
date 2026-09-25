import xlsx from 'xlsx'
export class ExcelUtisls{
   
    static getexceldata(filepath:string, sheetname:string){
        try{
           const workbook= xlsx.readFile(filepath)
           const sheet = workbook.Sheets[sheetname]!
           const jsondata = xlsx.utils.sheet_to_json(sheet)
           return jsondata
        }
        catch(error){
            console.log(error)
        }
    }
    
}