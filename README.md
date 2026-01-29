# EmailValidator

Validate Email Addressed to Clean Mailing Lists.

This tool uses [Joshua Tauberer's](https://pypi.org/user/Joshua.Tauberer/)
excellent Python module
[email-validator](https://pypi.org/project/email-validator/) for the bulk of
its work.  What we provide here is simply some wrappers for the library.

The checks peformed include both pattern analysis of purported email addresses
and DNS lookup of MX records for structurally plausible domain names.

# Usage Example (command-line)

```sh
% bin/validate-emails data/test-cases.txt > /path/to/result/tests.tsv
```

The output produced is a tab-separated file. Shown below is a table version of
the data produced.

<table>
  <thead>
    <tr>
      <th>Email</th>
      <th>Normalized</th>
      <th>ASCII</th>
      <th>Error</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>mertz@gnosis.cx</td>
      <td>mertz@gnosis.cx</td>
      <td>mertz@gnosis.cx</td>
      <td></td>
    </tr>
    <tr>
      <td>User Name &lt;user@gmail.com&gt;</td>
      <td>user@gmail.com</td>
      <td>user@gmail.com</td>
      <td></td>
    </tr>
    <tr>
      <td>User Name &lt;user@example.gov&gt;</td>
      <td></td>
      <td></td>
      <td>The domain name example.gov does not accept email.</td>
    </tr>
    <tr>
      <td>david mertz@gmail.com</td>
      <td>david mertz@gmail.com</td>
      <td>david mertz@gmail.com</td>
      <td></td>
    </tr>
    <tr>
      <td>name@example.com</td>
      <td></td>
      <td></td>
      <td>The domain name example.com does not accept email.</td>
    </tr>
    <tr>
      <td>name@kfjasdflkj.com</td>
      <td></td>
      <td></td>
      <td>The domain name kfjasdflkj.com does not exist.</td>
    </tr>
    <tr>
      <td>José@gmail.com</td>
      <td>José@gmail.com</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>𝔞𝔟𝔠@𝐆𝐌𝐀𝐈𝐋.𝘤𝘰𝕞</td>
      <td>𝔞𝔟𝔠@gmail.com</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>tsu@ツ.net</td>
      <td>tsu@ツ.net</td>
      <td>tsu@xn--bdk.net</td>
      <td></td>
    </tr>
    <tr>
      <td>utter_nonsense</td>
      <td></td>
      <td></td>
      <td>An email address must have an @-sign.</td>
    </tr>
    <tr>
      <td>aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa@mail.me</td>
      <td>aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa@mail.me</td>
      <td>aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa@mail.me</td>
      <td></td>
    </tr>
    <tr>
      <td>aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa@mail.me</td>
      <td></td>
      <td></td>
      <td>The email address is too long before the @-sign (1 character too many).</td>
    </tr>
  </tbody>
</table>

