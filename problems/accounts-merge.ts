export type Param = string[][];
export type Result = string[][];

export function accountsMerge(accounts: Param): Result {
  const mailToAccountMap = new Map<string, string[][]>();

  // Creating Map with all accounts containing email
  for (const account of accounts) {
    for (let i = 1; i < account.length; i++) {
      const email = account[i];

      let accountsWithMail = mailToAccountMap.get(email);

      if (!accountsWithMail) {
        accountsWithMail = [];
        mailToAccountMap.set(email, accountsWithMail);
      }

      accountsWithMail.push(account);
    }
  }

  const mergedAccounts: string[][] = [];

  // Iterating over each email, merging accounts recursively
  for (const [email, accountsWithEmail] of mailToAccountMap.entries()) {
    // If accountsWithEmail is empty, it means that we already added merged accounts with this email
    if (!accountsWithEmail.length) {
      continue;
    }

    const mergedAccount = [accountsWithEmail[0][0]];
    const set = new Set<string>();

    fillEmailsSet(email, set);

    mergedAccount.push(...set.values());

    mergedAccount.sort((a, b) => {
      if (!a.includes('@')) {
        return -1;
      }
      if (!b.includes('@')) {
        return 1;
      }

      return a < b ? -1 : 1;
    });

    mergedAccounts.push(mergedAccount);
  }

  return mergedAccounts;

  function fillEmailsSet(email: string, set: Set<string>) {
    const accountsWithEmail = mailToAccountMap.get(email);

    if (accountsWithEmail?.length) {
      const emails = [];

      for (const account of accountsWithEmail) {
        for (let i = 1; i < account.length; i++) {
          emails.push(account[i]);
        }
      }

      // Removing accounts from email that we already been to
      mailToAccountMap.set(email, []);

      emails.forEach(email => {
        set.add(email);
        fillEmailsSet(email, set);
      })
    }
  }
};
