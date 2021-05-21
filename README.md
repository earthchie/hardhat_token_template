# Usage
ภาษาไทย เลื่อนลงไปด้านล่าง


1. Rename `./contracts/TokenName.sol` to the name of your token. 
   Let's say `Durian Token`, so rename this file to `./contracts/Durian.sol`
2. Edit `./contracts/Durian.sol` line #339 replace `{{TokenName}}` with `Durian`

from
```
contract {{TokenName}} is Context, IBEP20, Ownable {
```
to
```
contract Durian is Context, IBEP20, Ownable {
```
3. Edit line #352-#355 as you desire. For Example

from
```
_name = "{{Token Name}}";
_symbol = "{{Token Symbol}}";
_decimals = 18;
_totalSupply = 100_000_000 * 1e18;
```

to
```
_name = "Durian";
_symbol = "DUR";
_decimals = 18;
_totalSupply = 100_000_000 * 1e18;
```

4. Save `./contracts/Durian.sol`
5. Edit `./scripts/deploy.js` line #6 to your contract name
6. Edit `./hardhat.config.js` line #3 add mnemonic of your deployer wallet.
7. Make sure that the network you wish to deploy the contract is listed on line #15
8. at the root directory of this repo. Execute following command

```bash
npm install
npx hardhat compile --network thaichain
npx hardhat run --network thaichain scripts/deploy.js
```
Please change network to your target network.

# วิธีใช้

1. เปลี่ยนชื่อไฟล์ `./contracts/TokenName.sol` เป็นชื่อเหรียญที่ต้องการ
   เช่นชื่อเหรียญ `Durian` ก็แก้เป็น `./contracts/Durian.sol`
2. แก้ `./contracts/Durian.sol` บรรทัดที่ #339 แก้ `{{TokenName}}` เป็น `Durian`

เช่น จาก
```
contract {{TokenName}} is Context, IBEP20, Ownable {
```
แก้เป็น
```
contract Durian is Context, IBEP20, Ownable {
```
3. แก้บรรทัดที่ #352-#355 ตามต้องการ

เช่น
```
_name = "{{Token Name}}";
_symbol = "{{Token Symbol}}";
_decimals = 18;
_totalSupply = 100_000_000 * 1e18;
```

เป็น
```
_name = "Durian";
_symbol = "DUR";
_decimals = 18;
_totalSupply = 100_000_000 * 1e18;
```

4. บันทึก `./contracts/Durian.sol`
5. แก้ไฟล์ `./scripts/deploy.js` บรรทัดที่ #6 เป็นชื่อเหรียญ
6. แก้ไฟล์ `./hardhat.config.js` บรรทัดที่ #3 เป็น mnemonic ของกระเป๋าที่จะใช้ deploy contract
7. เช็คบรรทัดที่ #15 ให้แน่ใจว่ามี network ที่ต้องการ deploy อยู่ในนั้นแล้้ว
8. ที่ root directory ของ repo พิมพ์คำสั่ง

```bash
npm install
npx hardhat compile --network thaichain
npx hardhat run --network thaichain scripts/deploy.js
```
แก้ network เป็นอันที่ต้องการได้เลย
