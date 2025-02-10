Challenge Question Answers:
1. Password Authentication
Why is it important to store passwords in a hashed format?
Storing passwords in a hashed format ensures that even if an attacker gains access to the password database, they cannot easily retrieve the original passwords. Hashing converts the password into a fixed-length string that is nearly impossible to reverse.

Security Advantage Over Plain Text Passwords:

One-way encryption: Hashing is a one-way function, making it infeasible to retrieve the original password.
Protection from database breaches: Even if a breach occurs, the attacker only obtains hashes, not actual 
Prevents reuse of passwords: Users tend to reuse passwords across sites, so hashing helps mitigate risks in case of data leaks.
2. Multi-Factor Authentication (MFA)
How does implementing MFA enhance the security of the transaction process?
MFA adds an extra layer of security by requiring multiple verification steps before allowing access or transactions. This ensures that even if an attacker steals a password, they still need another factor (e.g., a phone or fingerprint) to gain access.

Types of Attacks MFA Helps Prevent:

Phishing Attacks: Even if a password is compromised, the attacker lacks the second authentication factor.
Brute Force Attacks: Guessing a password alone isn’t enough to gain access.
Credential Stuffing: Even if users reuse passwords across platforms, MFA prevents unauthorized logins.
Man-in-the-Middle (MITM) Attacks: SMS-based or app-based authentication ensures real-time validation.
3. Balance Verification
Why is it necessary to check the account balance before allowing a withdrawal?
Checking the balance ensures that the account has sufficient funds to complete the transaction, preventing overdrafts or failed payments.

Risks If This Step Is Skipped:

Overdrafts/Debt: The account could go negative, leading to financial losses for the user or institution.
Fraudulent Transactions: Attackers could repeatedly withdraw funds without limit.
System Integrity Issues: Unchecked withdrawals could create inconsistencies in account records.
Bank Reconciliation Errors: The bank may struggle to maintain accurate financial records if negative balances are allowed.
4. Daily Transaction Limit
What purpose does the daily transaction limit serve?
A daily transaction limit protects users and financial institutions from excessive withdrawals, reducing potential fraud and reckless spending.

How It Prevents Fraudulent or Excessive Withdrawals:

Limits Damage from Account Breaches: Even if an attacker gains access, they can only withdraw a set amount per day.
Prevents Money Laundering: Fraudsters cannot rapidly move large sums of money.
Encourages Financial Discipline: Users avoid depleting their accounts too quickly.
Enhances Fraud Detection: Unusual transactions exceeding the limit can trigger alerts for further verification.
5. Improvement – Fraud Detection System
How would you implement fraud detection (e.g., detecting abnormal withdrawal patterns)?
To detect fraud, I would implement a machine learning-based fraud detection system that tracks user behavior and flags anomalies.

Additional Data to Track for Fraud Detection:

Transaction History: Analyze past transactions to identify unusual patterns.
Transaction Frequency & Volume: Unusual spikes in activity could indicate fraud.
Location Data: Flag withdrawals from unexpected locations.
Device Fingerprinting: Track whether transactions originate from a known device.
Time-of-Day Activity: Unexpected late-night withdrawals might indicate fraud.
Behavioral Biometrics: Monitor keystroke dynamics and login behavior to detect unauthorized access.
IP Address & Geolocation: Identify risky access points and flag VPN or proxy usage.