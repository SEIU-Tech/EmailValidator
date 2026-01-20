import sys

from email_validator import validate_email, EmailNotValidError, caching_resolver


def validate_emails(
    emails: list[str], out=sys.stdout, resolver=caching_resolver(timeout=10)
):
    print("Email\tNormalized\tASCII\tError", file=out)
    for email in emails:
        try:
            info = validate_email(
                email,
                check_deliverability=True,
                allow_display_name=True,
                allow_quoted_local=True,
                dns_resolver=resolver,
                strict=True,  # Enforce RFC 5322 standards
            )
            print(
                f"{email}\t{info.normalized or ''}\t{info.ascii_email or ''}\t",
                file=out,
            )
        except EmailNotValidError as e:
            print(f"{email}\t\t\t{str(e)}", file=out)
