 Feature: income and expense transactions

  Scenario Outline: As a user, I want to add a new income transaction
    Given I am on moneyfy home screen
    Then I store balance, income and expense values
    When I tap on income button
    When I add a income transaction with amount <amount> ,category <category> ,payment mode <mode> and description <description>
    Then I should see the updated balance and the recorded transaction amount
    Examples:
      | amount | category | mode | description |
      | 100    | Deposits | cash | company1    |
      | 200.35 | Salary   | card | company2    |


  Scenario Outline: As a user, I want to add a new expense transaction
    Given I am on moneyfy home screen
    Then I store balance, income and expense values
    When I tap on expense button
    When I add a expense transaction with amount <amount> ,category <category> ,payment mode <mode> and description <description>
    Then I should see the updated balance and the recorded transaction amount
    Examples:
      | amount | category | mode | description |
      | 46     | Bills    | cash | e-bill      |
      | 200.35 | Car      | card | Car service |

  Scenario Outline: As a user, I want to do new transfer from acounts section
    Given I am on moneyfy home screen
    Then I tap to menu overflow
    Then I tap on accounts
    Then I store cash and card balances
    When I tap on transfer button
    When I transfer amount <amount> , from <from> account to <to> account with description <description>
    Then I tap to menu overflow
    Then I tap on accounts
    Then I should see the updated card and cash balances
    Examples:
      | amount | from | to   | description                   |
      | 100    | cash | card | cash to card account transfer |
      | 200.35 | card | cash | card to cash account transfer |