import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class Toastr {
  constructor(private toastr:ToastrService){}

  showSuccess(successMessage:string){
    this.toastr.success(successMessage,'success')
  }

  showError(errorMessage:string){
    this.toastr.error(errorMessage,'error');
  }

  showWarning(warningMessage:string){
    this.toastr.warning(warningMessage,'warning');
  }
}
