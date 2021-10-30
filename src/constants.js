const CONTRACT_ADDRESS = '0x6ca18039D5Ab3294B6327BD5Ae97Ba03cAF28c96';

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    chakra: characterData.chakra.toNumber(),
    maxChakra: characterData.maxChakra.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };
