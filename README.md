# Kraken Domains

This is the repo for the Kraken Domain Project, built on the Mantle Testnet

## Smart Contracts Links

- Standard Domain Factory Address - https://explorer.testnet.mantle.xyz/address/0xD57ddE7aa7751B59ff19673Af2412F0b27f8A78A
- Standard Domain Resolver Address - https://explorer.testnet.mantle.xyz/address/0x66FD5c67d847E55a57616a49d5F1C161334799ef
- SBT Resolver Address - https://explorer.testnet.mantle.xyz/address/0x46519b639496e1051e59fD5A2a50ecaD6Cd9d338
- SBT Factory Address - https://explorer.testnet.mantle.xyz/address/0xD53e24eeD08e375fa771082677DD66B61efB65Ed
- ForbiddenTlds - https://explorer.testnet.mantle.xyz/address/0xEB68B7B7d7F7A94FC65FA0aa916845DC510aA380
- Domain Hub - https://explorer.testnet.mantle.xyz/address/0xa1bBcdAFdC70e6C150919e48c9BB166a0125A7Eb
- Metadata Address - https://explorer.testnet.mantle.xyz/address/0x652182af1c9114d6D01CceA127cc3EaFebCCFD9F

- Mantle Docs: https://docs.mantle.xyz/introducing-mantle/quick-start/deploying-a-smart-contract

The project uses Hardhat as a development environment and Mantle testnet as the network.

## Workflow User
1. Launch app to Connect Wallet and redirect to Dashboard.

![read1](https://user-images.githubusercontent.com/124390899/219905144-6ba02fc6-5fb5-45e9-9ff1-0546fcd30fb6.PNG)


2. Create Domain Page - User can select what kind of domain they choose to create (A Standard Transferable domain or an SBT domain).
3. User inputs the desired parameters for their domain choice

![creste](https://user-images.githubusercontent.com/124390899/219947923-aedc8339-c0f6-4b56-b50a-2d671c516ef9.PNG)


4. After Domain is created and transaction verified, the newly created TLD (top level domain) is populated from the smart contract, using the Mantle Rpc url.
5. User can proceed to the MINTER page to choose what the minting page they'd like to go to.

![read3](https://user-images.githubusercontent.com/124390899/219905298-184f916e-8d8e-4337-8432-3ba108cfa6fa.PNG)

6. User can now add their desired name, select the TLD domain they created, and mint a domain

![redd](https://user-images.githubusercontent.com/124390899/219948164-f6da5fd1-bb9e-4f7e-bf49-86a72ab35ef4.PNG)


![comp](https://user-images.githubusercontent.com/124390899/219948087-3c8a8467-57c3-4704-9229-47b1d6ca7aae.PNG)

![loki](https://user-images.githubusercontent.com/124390899/219948276-a013610b-ccb8-4584-a10c-c3272af4c3aa.PNG)


# Unfinished Features
I've built the UI for this features, and the functions already exists on the smart contract, but I didn't have enough time to implement. I would continue after the hackathon

## Update Domain Metadata

![update](https://user-images.githubusercontent.com/124390899/219949004-4d88ded0-5464-4a9b-9b52-13b809a58690.PNG)

## Change Domain Ownerrship

![transfer](https://user-images.githubusercontent.com/124390899/219949031-6dc2f6e2-ecdf-4122-a027-6ada6740401c.PNG)






