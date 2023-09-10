import { Component } from '@angular/core';
import { MapicpinserviceService } from './mapicpinservice.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'magicpin';
  final :any
  obj = [
    { name: 'Saran', amount: 50000, proof:true,Date: '20/06/2022' },
    { name: 'Delhi', amount: 50000, proof:true,Date: '20/04/2022' },
    { name: 'Ramudu', amount: 50000, proof:true,Date: '14/08/2023' },
    { name: 'Delhi bro', amount: 50000, proof:true,Date: '06/09/2023' },
    { name: 'King Raju', amount: 50000, proof:false,Date: '01/05/2023' },
    { name: 'Neelagangavaram', amount: 50000, proof:true,Date: '28/07/2023' },
    { name: 'Paradesi Bro', amount: 50000, proof:true,Date: '06/09/2023' },
    { name: 'Chinna venkata subbaiah', amount: 100000, proof:false,Date: '06/09/2023' },
    { name: 'Chinna Akka', amount: 100000, proof:false,Date: '08/07/2023' },
    { name: 'Prasad', amount: 100000, proof:true,Date: '' },
    { name: 'Narasaiah', amount: 100000, proof:true,Date: '20/06/2022' },
    { name: 'Rk Anna', amount: 100000, proof:false,Date: '30/03/2023' },
    { name: 'Padma', amount: 150000, proof:false,Date: '01/07/2023' },
    { name: 'Yellaiah', amount: 30000, proof:true,Date: '08/11/22' },
    { name: 'Kiran', amount: 200000, proof:true,Date: '' },
    { name: 'Hari Anna', amount: 150000, proof:true,Date: '' },
    { name: 'Hari Anna', amount: 250000, proof:true,Date: '' },
    { name: 'Chinna Akka', amount: 300000, proof:false,Date: '' },
    { name: '3 va Yogaiah', amount: 40000, proof:true,Date: '05/09/2023' },
    { name: 'Manneiah pavuluri', amount: 500000, proof:true,Date: '05/09/2023' },
    { name: 'Venkata reddy', amount: 200000, proof:false,Date: '03/08/2023' },
    { name: 'Gurram Venkateswrlu', amount: 200000, proof:true,Date: '03/08/2023' },
  ]

  changed: any;
  user: User = {
    mbl: "",
  };
  sum: any;

  constructor(private mapicpinserviceService: MapicpinserviceService) { }
  ngOnInit() {

    // sort by salary
   this.final = this.obj.sort(function (x, y) {
      return y.amount - x.amount;
    });
  this.sum = this.final.map((item:any) => item.amount).reduce((prev:any, next:any) => prev + next);
  console.log(this.sum)
  }

  changeData() {
  }
  // submit() {
  //   const payload = {
  //     mobile: '8328220928',
  //     prd: 'mobile',
  //     userToken: '03ADUVZwB9k1CVs_iWWuRxcQQvt1gU5cSGq1XeseO46fjUAFnTEQAibXnz-sRVSBKHIYLnW4UQuBHMITGhr6lUoTY4MVkSTy-leNtKidWyMHUNOQ-GPlkISVWH3XZDxOHfM3uLEGC_h03OjDx-cM607HMxCzqNZ-c2xOdd79ME12uUp3ji-FBKIe6S2Df5JyctLOmNl8H0aBvCmX_fEcySMvBcquWXiGkV68jElctQIesrWP-NCwbdNNJRJzQFZxuU1-bk2QrPUZoAXw1dlZ6hAKBkRq5zkr1gaVHUlD5YmMIdsvUnE83nvo7WPFKvuQSh4_BbrWTFRIfOxNvOyEuytWHJSuYgNRNZxGhR7OdeWJtYsfDy0O7qKY3-gbsLfp3414UfA-tZMd6Deqaer_vFYStTNB6YU2_hQZl-8za6wnYDotlYfIglUBEXncRtZqOIBusaVnuniatbT9OhFXNh1fK90OyHYM91Ny-UMoqEXvr9IWtX0VndlIcZ-Igb7MXUDOJhfd96sBVYMHVNksMx4sXPCWcqE639jsxaM8Bojp8GPaEjnjr6hHPhYCk8teHUiz4_3fkLSxL8KWaDMVmbEWT0KttY_7bMhCRFeQPGlYY62u-S-z9XZyQoLxvv-gBGDilUd6RYTdtFVf5HGBnlTsCXHcynccpxs_yOiRWfjRC6trtcHu0IFSmddqP2_YOCJXDSCSaupYW82tUnmYbFFqQfuyf-oMOKnm2CWxqapKzWh4RXJ1TsoReD3qvob7YqAnrkVfyJWX3IUNUb_86KA4DHpsfEGsYjLWvmCADV0G0Zaxx9YCtMuoZnX9ri0n_ZVY2o5yy_hjCM8T436ZKMTMr9zMnlBT88OUqjlQZQ6d3EYrmyCcGWFiplxsqUt5O_sDBtTLCP53CzFQzDWFSxOom9iMLJTxrwWOWaiWvJZCKlJPHpZi0DbaBUqOGwkJPX7fuz__xrM8cSoZ0-6dtNd6nmSbjjJkOP_TQZCAN3PInl7UDcr-rbnfbzdnTh-DOV130QHy3bMVidBPyHD98aQZCkm91PXvdAQiGDZfQ2mNfU9vm0ts0SPsfEAN8KxbD1KU8BShvOmFafF1ddjSIk20fDot6NDmDZeN5Wt2Puwg6sbiaQAfntp46XW-r5uUurB_mxXi8AMMF95zrI2GMGv_fmGJ4ZxQIiaZpwS7VooDDtluwk3kJschihp9gCZuP_g3JP7WP4UcxkLiQQ_SV9rVVn72QA0pjPa9V-HOvISYBdjoaWNrOjzi0XbyXrv2egYeWObtGXbUMNVq0syFL3mU9uEf8C4vvoXRRVJrnBeIoaj82By8ONN8Ly_qlsRv2-YLMu1XaJcszswXD1gokQX95zb_ufY3TdIi1WTD_DxGbOckToMMfZzYY7HzT0wVt2BF8OLTBoM-4GD7jC8XqXViNSdqeDUuQ_89FJajWXDmRIIeLlDQgORNEtXAQAVvFpiZgX1NXhm5Qdh5kQXP8pjFRuy-0HMtq1_aIGKCvrdMvvPCUqWd0lQmw',
  //     version: '10'
  //   };


  //   this.mapicpinserviceService.sendFormData(formData).subscribe(
  //     (response) => {
  //       console.log('Success:', response);
  //     },
  //     (error) => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }

  submit() {
    let payload = {
      // phonenumber: this.user.mbl
      "phoneNumber":"917013543632","email":"","authMethod":"SMS","token":"03AFcWeA4382Fb6IwhhAtJaiDnR5Ek8vhMiRlU1zsSiP07YYyHcqPY3W8SFexOiEQafGlrIKzuIIoTB2M7s3srt7I4-F9em9yJtVJIJ9WEO1Q6eiQ515A9-hoA8kIFrM47VFHrvlfiGmgyjL8S3LtHBPRC3T0HoMVa66_DdISf0DaRRBNGtD3mrteNoVsA-xwgepjki2mq8p4NEt0ShTM4U59VtIaRVhGGzCHsME1GmAscKqBNyadPO76u4M4GYCgQWEO3JhlPoBeQBpUOLRgmh1D2DJZnUQbYM_Eq4bmgKlXLhGBeKJ_HKMLZmG0ph4pMwFjnsSpao-Jbs7D11BIgBUnyCFtjRfvR75ch28ismsjljhTdHsyD6lqEeOp8YjWVEEUHeIR4VGUapC3knnweJpJV3gY5YwCNpByKwcN0AYYk7xXDFKNAxWR33T4kAxQhm-vBm-e-WL8wUe974zXkNpR1IvKkyEgKBAw-bpLsy0BNag20ylUcHhjL6HD90TjHGBl1qyLEy6SIIEvJUEn3E4v_bBDsgpGJfQ"}
    
    // const formData = new FormData();
    // formData.append('mobile', '8328220928');
    // formData.append('prd', 'mbl');
    // formData.append('version', '10');

    // formData.append('otpToken', '03ADUVZwB0S77Q8LRRq0p2QRQFjFavs_ZiNcS2IMLIfRYZiPb6O-HPqwCXy616NPH7weDP93sQY1dPh6SV7rhjAd-vnEgHhcL0Cxrabx65MBvycqwcPmCa1nDTm7CCjhWWrIPIQfF1nU9Ntt6hTDlZNVWjWx9VTqavv-MXZ1AQvi9grHwAD_CGsqIhtNMFbyOjY1d3XD8KOxpY3cBp1tBd8Q9MHybyrzG5IEhB9uABAfd4jNMm9jComcPHYmB0FSUS7XqvXWGQtwlKmi5WVz5wqclY9oyHtcjpY5Tgrf9WCVpvDgEk2qxMw7_jzkzJdKZQbQKWnFwI_eQnFCKQtEtxI38pUg8mhTPXexTTZfP5iTMSDHNyI1x7MuQ0MJJWO3hYmRhAAil7mZjglat7SvBbeshy4FMBidWazR0fkrREF9lherBu9gv-SSiBC4Upc1os7i-Lunn2tqCcUd9fSJ0bbPQAnxsROsx9P5bZOO5MxLpJ53UveEquWBiFTt7K0tVJEjhFXSSgPNFWSUiAah90HuJzs48n-_Ytu32WKordXbwUrVAhsRYy9xVvDRkCtf6_NceDmDjPK3kxuraLXeeGOxkR64p9qjhHZIgY8V-HrLtXx0LSn520Ymjl6CdZMr8R1I-myXeNv01MC560yqJ_1_N1UJr8uKu1nYRmg7A4SCZ34VOf1JHbcpBdxc2zpUP9fw9_rLsc1VHnRM54hhq0_eaEsGneSGsLsoVFIOlMzqcnUsSTmxm7z6-bBW6Mli9NB8F5p5ITy6rKgDpRPWgjm__E4rG6dL6t640YEzwuS82cckX6qMS8vjAUdIquvp467eE3wEH5HeodHfQV02SD-C4YIbwXuNJEL4rsJEpZVOvHzXWFETELHXlpyOwJYBMDtg2xcN_dv3qHgHomqb8mx53RgEqZOc5vC14hXfa3UsxH2SvKCU2J0z5tKYJGdkhWHA7mLTJEc31nEHFC7BHCGAhx-Ry8cvRFLg_-KMXAF0HmQUZcPvkLs34YrwACSxj8NeloDz-4yMTlyhwbRiHDB_-I5Z0O3YUz801eeMaM2bmMV4Kw3BQLRtVWkBpAjQkV9wWQpcRXTuSBzgzlQaW73oxdpTWaIrZ1nLo8QyfNVwnWjtpG_vMKj6pFBG6ATXTDoZrmp_2a39uP1I-sZYum3xgdblMwYzBgw1ZLtQ3mjWTmrCTSirLkEyej6yjYeTquzMTOxKAGKTfNboRm_rqFjJ2aCCTrQ7xBEMKk8RneihYyAkGiHKdz932OxQoKja2fnAEPUef0vYpMiAUovNTHQvXJAPQSHbcukHMasEJZtX-xbJCxwBwBN6usvPJteUbatlkPr3gUJUYeWcf4YMCT8Dq5E42S0bsYZAIZ977Nb-XxKAQ6izzE2kdyr2oTQKFEVKRiapJKmzOp6GFaNxEbGXx8eeqFvLWrg6ckOL5EuThrOoFJR-NC5ws-7CfZFfDtCjccdGxcz_2C2sd2c82qIqHF4dTRMWpEH4_L1h7Dnw_vu1CR7qkLJbE')

    // formData.append('field2', 'value2');
    // Add more fields as needed.

   
  }
  verify(user: any) {
    const formData = new FormData();
    formData.append('mobile', '8328220928');
    // formData.append('otpToken','03ADUVZwB0S77Q8LRRq0p2QRQFjFavs_ZiNcS2IMLIfRYZiPb6O-HPqwCXy616NPH7weDP93sQY1dPh6SV7rhjAd-vnEgHhcL0Cxrabx65MBvycqwcPmCa1nDTm7CCjhWWrIPIQfF1nU9Ntt6hTDlZNVWjWx9VTqavv-MXZ1AQvi9grHwAD_CGsqIhtNMFbyOjY1d3XD8KOxpY3cBp1tBd8Q9MHybyrzG5IEhB9uABAfd4jNMm9jComcPHYmB0FSUS7XqvXWGQtwlKmi5WVz5wqclY9oyHtcjpY5Tgrf9WCVpvDgEk2qxMw7_jzkzJdKZQbQKWnFwI_eQnFCKQtEtxI38pUg8mhTPXexTTZfP5iTMSDHNyI1x7MuQ0MJJWO3hYmRhAAil7mZjglat7SvBbeshy4FMBidWazR0fkrREF9lherBu9gv-SSiBC4Upc1os7i-Lunn2tqCcUd9fSJ0bbPQAnxsROsx9P5bZOO5MxLpJ53UveEquWBiFTt7K0tVJEjhFXSSgPNFWSUiAah90HuJzs48n-_Ytu32WKordXbwUrVAhsRYy9xVvDRkCtf6_NceDmDjPK3kxuraLXeeGOxkR64p9qjhHZIgY8V-HrLtXx0LSn520Ymjl6CdZMr8R1I-myXeNv01MC560yqJ_1_N1UJr8uKu1nYRmg7A4SCZ34VOf1JHbcpBdxc2zpUP9fw9_rLsc1VHnRM54hhq0_eaEsGneSGsLsoVFIOlMzqcnUsSTmxm7z6-bBW6Mli9NB8F5p5ITy6rKgDpRPWgjm__E4rG6dL6t640YEzwuS82cckX6qMS8vjAUdIquvp467eE3wEH5HeodHfQV02SD-C4YIbwXuNJEL4rsJEpZVOvHzXWFETELHXlpyOwJYBMDtg2xcN_dv3qHgHomqb8mx53RgEqZOc5vC14hXfa3UsxH2SvKCU2J0z5tKYJGdkhWHA7mLTJEc31nEHFC7BHCGAhx-Ry8cvRFLg_-KMXAF0HmQUZcPvkLs34YrwACSxj8NeloDz-4yMTlyhwbRiHDB_-I5Z0O3YUz801eeMaM2bmMV4Kw3BQLRtVWkBpAjQkV9wWQpcRXTuSBzgzlQaW73oxdpTWaIrZ1nLo8QyfNVwnWjtpG_vMKj6pFBG6ATXTDoZrmp_2a39uP1I-sZYum3xgdblMwYzBgw1ZLtQ3mjWTmrCTSirLkEyej6yjYeTquzMTOxKAGKTfNboRm_rqFjJ2aCCTrQ7xBEMKk8RneihYyAkGiHKdz932OxQoKja2fnAEPUef0vYpMiAUovNTHQvXJAPQSHbcukHMasEJZtX-xbJCxwBwBN6usvPJteUbatlkPr3gUJUYeWcf4YMCT8Dq5E42S0bsYZAIZ977Nb-XxKAQ6izzE2kdyr2oTQKFEVKRiapJKmzOp6GFaNxEbGXx8eeqFvLWrg6ckOL5EuThrOoFJR-NC5ws-7CfZFfDtCjccdGxcz_2C2sd2c82qIqHF4dTRMWpEH4_L1h7Dnw_vu1CR7qkLJbE')
    formData.append('otp', user.number);


    
    }

 
  }



export interface User {
  mbl?: string;
  number?: number | undefined
}


