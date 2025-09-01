import fs from 'fs';
import ejs from 'ejs';

class ForgotPasswordTemplate
{
  public passwordResetTemplate( username: string, resetLink: string ): string
  {
    return ejs.render(fs.readFileSync(__dirname + '/forgot-password-template.ejs', 'utf-8'), {
      username,
      resetLink,
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZkQn8qjZUCAgJO5GZPeqQy2rJ6PhiyLSGw&s'
    });
  }
}

export const forgotPasswordTemplate: ForgotPasswordTemplate = new ForgotPasswordTemplate();
