 Feature: income, expense, balance and transfer records

  Scenario Outline: As a user, I want to add a new income record
    Given I am on moneyfy home screen
    Then I store balance, income and expense record
    When I tap on income button
    When I add an income record with amount <amount> ,category <category> ,account <mode> and notes <description>
    Then I should see the updated balance, income and expense amounts
    Examples:
      | amount | category | mode | description |
      | 100    | Deposits | cash | company1    |
      | 200.35 | Salary   | card | company2    |


  Scenario Outline: As a user, I want to add a new expense record
    Given I am on moneyfy home screen
    Then I store balance, income and expense record
    When I tap on expense button
    When I add an expense record with amount <amount> ,category <category> ,account <mode> and notes <description>
    Then I should see the updated balance, income and expense amounts
    Examples:
      | amount | category | mode | description |
      | 46     | Bills    | cash | e-bill      |
      | 200.35 | Car      | card | Car service |

  Scenario Outline: As a user, I want to do new transfer from one acounts to another
    Given I am on moneyfy home screen
    Then I tap to menu overflow
    Then I tap on accounts
    Then I store cash and card balances
    When I tap on transfer button
    When I transfer amount <amount> , from <from> account to <to> account with notes <notes>
    Then I tap to menu overflow
    Then I tap on accounts
    Then I should see the updated card and cash account balances
    Examples:
      | amount | from | to   | notes                   |
      | 100    | cash | card | cash to card account transfer |
      | 200.35 | card | cash | card to cash account transfer |