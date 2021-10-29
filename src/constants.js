const CONTRACT_ADDRESS = '0xE2B445f38C540d842865d412e5548578bbf93667';

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
