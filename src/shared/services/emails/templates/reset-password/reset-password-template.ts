import fs from 'fs';
import ejs from 'ejs';
import { IResetPasswordParams } from '@user/interfaces/user.interface';

class ResetPasswordTemplate {
  public passwordResetConfirmationTemplate(templateParams: IResetPasswordParams): string {
    const { username, email, ipaddress, date } = templateParams;
    return ejs.render(fs.readFileSync(__dirname + '/reset-password-template.ejs', 'utf-8'), {
      username,
      email,
      ipaddress,
      date, 
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZkQn8qjZUCAgJO5GZPeqQy2rJ6PhiyLSGw&s'
    });
  }
}

export const resetPasswordTemplate: ResetPasswordTemplate = new ResetPasswordTemplate();
