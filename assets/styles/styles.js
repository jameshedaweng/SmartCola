import { StyleSheet } from 'react-native';

const colors = {
  white: '#FFFFFF',
  gray7: '#FAFAFA',
  gray6: '#EEEEEE',
  gray5: '#CCCCCC',
  gray4: '#AAAAAA',
  gray3: '#777777',
  gray2: '#444444',
  gray1: '#333333',
  black: '#000000',
  themeBlue: '#3498DB',
  themeDarkBlue: '#2E86C1',
  themeLightBlue: '#F4FAFE',
  themeGreen: '#2ECC71',
  themeDarkGreen: '#28B463',
  themeLightGreen: '#F1FCF6',
  themeOrange: '#F39C12',
  themeDarkOrange: '#E67E22',
  themeRed: '#E74C3C',
  themeLightRed: '#FCEAE8',
  translucentWhite: 'rgba(255, 255, 255, 0.8)',
  translucentGray: 'rgba(128, 128, 128, 0.5)'
};

export default StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: colors.gray7
  },
  sectionsContainer: {
    flex: 1
  },
  contentLeft: {
    width: '30%',
    backgroundColor: colors.gray7,
    borderRightWidth: 1,
    borderColor: colors.gray5
  },
  contentLeftLarge: {
    width: '66.67%',
    backgroundColor: colors.gray7,
    borderRightWidth: 1,
    borderColor: colors.gray5
  },
  leftListContainer: {
    paddingLeft: 30,
    paddingTop: 10
  },
  leftListSection: {
    marginBottom: 30
  },
  leftListSectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.black,
    backgroundColor: 'transparent',
    marginBottom: 10
  },
  leftListItem: {
    paddingVertical: 10,
  },
  leftListItemText: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.themeOrange,
    backgroundColor: 'transparent'
  },
  contentRightContainer: {
    width: "70%",
  },
  contentRightSmallContainer: {
    width: "33.33%",
  },
  contentRight: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  largeTitleContainer: {
    marginTop: 35,
    marginBottom: 15,
    paddingHorizontal: 30
  },
  largeTitle: {
    fontSize: 42,
    fontWeight: '800',
    color: colors.black,
    backgroundColor: 'transparent'
  },
  largeTitleCenterContainer: {
    marginTop: 35,
    marginBottom: 15,
    paddingHorizontal: 30,
  },
  largeTitleCenter: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.themeOrange,
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  smallTitle: {
    color: colors.gray3,
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: 'transparent'
  },
  section: {
    paddingHorizontal: 30,
    paddingTop: 15
  },
  sectionInner: {
    paddingVertical: 15,
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginLeft: -30,
    marginRight: -30
  },
  closetLevel: {
    paddingVertical: 15,
    marginRight: -15,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  sectionLargeTitleContainer: {
    marginTop: 25,
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: colors.gray5
  },
  mediumTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.black,
    backgroundColor: 'transparent'
  },
  articlesContainer: {
    marginLeft: -20,
    marginRight: -20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 15
  },
  articleContainer: {
    height: 400,
    padding: 20
  },
  articleContainerSmall: {
    width: '40%',
  },
  articleContainerLarge: {
    width: '60%',
  },
  articleWrapper: {
    flex: 1,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    borderRadius: 15,
    backgroundColor: 'transparent'
  },
  article: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: colors.gray4,
  },
  articleBackground: {
    width: "100%",
    height: 400
  },
  articleTitleContainer: {
    position: 'absolute',
    bottom: 60,
    right: 20,
    left: 20
  },
  articleTitle: {
    color: colors.white,
    fontSize: 36,
    fontWeight: '700',
    backgroundColor: 'transparent',
    shadowColor: colors.black,
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    textAlign: 'left',
    marginBottom: 5
  },
  articleSubtitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
    backgroundColor: 'transparent',
    shadowColor: colors.black,
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    textAlign: 'left'
  },
  articleProductsContainer: {
    flex: 1,
    height: 270,
    marginTop: 15,
    marginLeft: -30,
    marginRight: -30,
    paddingLeft: 30,
    marginBottom: 30
  },
  combinationContainer: {
    flex: 1,
    height: 300,
    marginLeft: -30,
    marginRight: -30,
  },
  combinationOldProductContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: 255,
    height: 300
  },
  combinationOptionsContainer: {
    flex: 1,
    height: 270,
    width: "100%",
    marginTop: 15,
  },
  combinationOptionsDivider: {
    height: 270,
    width: 256,
    borderRightWidth: 1,
    borderColor: colors.gray5,
    marginRight: 15
  },
  productThumbContainer: {
    width: 210,
    height: 270,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.gray5,
  },
  productThumbSmallContainer: {
    width: 180,
    height: 220,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.gray5,
  },
  productThumbClosetContainer: {
    width: 197,
    height: 220,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.gray5,
  },
  productThumbClosetCommentContainer: {
    width: 197,
    height: 250,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.gray5,
  },
  productThumbNameWithCommentContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 28,
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 60
  },
  closetCommentsContainer: {
    width: 197,
    height: 30,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  closetCommentsText: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.white
  },
  productThumbSquareContainer: {
    width: 238.9,
    height: 238.9,
    borderRadius: 0,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: colors.gray5,
  },
  productThumbPrice: {
    position: 'absolute',
    left: 10,
    top: 10,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  productThumbPriceInt: {
    color: colors.gray2,
    fontSize: 20,
    fontWeight: '600',
    backgroundColor: 'transparent'
  },
  productThumbPriceDecimal: {
    color: colors.gray2,
    fontSize: 14,
    fontWeight: '700',
    backgroundColor: 'transparent',
    paddingTop: 2
  },
  productThumbNameContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 60
  },
  productThumbName: {
    color: colors.gray1,
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: 'transparent',
    textAlign: 'left'
  },
  productThumbButtonContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 24,
    height: 24,
    borderRadius: 12
  },
  productThumbButton: {
    width: 24,
    height: 24,
    borderRadius: 12
  },
  productThumbButtonText: {
    fontWeight: '700',
    color: colors.themeOrange,
    backgroundColor: 'transparent',
    fontSize: 18,
    textAlign: 'center'
  },
  productThumbButtonRemove: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.translucentGray
  },
  productThumbButtonTextRemove: {
    fontWeight: '700',
    color: colors.gray7,
    backgroundColor: 'transparent',
    fontSize: 17,
    textAlign: 'center'
  },
  productThumb: {
    width: 210,
    height: 270
  },
  productThumbSquare: {
    width: 238.9,
    height: 238.9
  },
  productThumbSmall: {
    width: 180,
    height: 220
  },
  productThumbCloset: {
    width: 197,
    height: 220
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    right: 0,
    top: 10
  },
  userAvatarLarge: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  userInfoContainer: {
    paddingBottom: 15
  },
  userInfoRow: {
    width: 320,
    flexDirection: 'row',
    marginTop: 10,
  },
  userInfoTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '400',
    color: colors.black,
    backgroundColor: 'transparent'
  },
  userInfoContent: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray2,
    backgroundColor: 'transparent',
    textAlign: 'right'
  },
  friendContainer: {
    width: 150,
    alignItems: 'center'
  },
  friendName: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    backgroundColor: 'transparent',
    color: colors.black
  },
  addFriendButtonContainer: {
    marginTop: 30,
    marginLeft: 30
  },
  addFriendButton: {
    backgroundColor: colors.gray5,
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
  },
  addFriendButtonText: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.themeOrange,
    paddingTop: 3,
    backgroundColor: 'transparent'
  },
  solidButton: {
    width: 320,
    height: 40,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: colors.themeOrange,
    paddingVertical: 10
  },
  solidButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.white,
    backgroundColor: 'transparent'
  },
  scrollViewPlaceholder:{
    height: 50,
    width: "100%"
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 30,
    marginBottom: 30
  },
  modal: {
    width: 600,
    backgroundColor: colors.white,
    borderRadius: 15
  },
  modalHeader: {
    height: 330,
    overflow: 'hidden'
  },
  modalHeaderTitleContainer: {
    position: 'absolute',
    bottom: 20,
    right: 30,
    left: 30
  },
  modalContent: {
    padding: 30
  },
  modalParagraph: {
    fontSize: 18,
    color: colors.black,
    marginBottom: 20,
    lineHeight: 28
  },
  modalImage: {
    width: 600,
    height: 400
  },
  modalButton: {
    width: 600,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: colors.white,
    marginTop: 10
  },
  modalButtonText: {
    color: colors.themeOrange,
    fontSize: 20,
    fontWeight: '600'
  },
  mapView: {
    height: 240,
  },
  shopListContainer: {
    borderTopWidth: 1,
    borderColor: colors.gray5,
    padding: 15
  },
  shopListItem: {
    borderBottomWidth: 1,
    borderColor: colors.gray5,
    paddingVertical: 15
  },
  shopListTitle: {
    color: colors.themeOrange,
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 2,
    backgroundColor: 'transparent'
  },
  shopListItemTitle: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 2,
    backgroundColor: 'transparent'
  },
  shopListItemSubtitle: {
    color: colors.gray3,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
    backgroundColor: 'transparent'
  },
  shopListDateTime: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  shopListItemTime: {
    color: colors.black,
    fontSize: 36,
    fontWeight: '400',
    backgroundColor: 'transparent',
  },
  shopListItemDate: {
    color: colors.black,
    fontSize: 12,
    fontWeight: '500',
    backgroundColor: 'transparent',
    paddingLeft: 5,
    paddingTop: 10
  },
  shopListItemButton: {
    height: 40,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: colors.themeOrange,
    paddingVertical: 10
  },
  fittingRoom: {
    paddingVertical: 15
  },
  fittingRoomNumber: {
    fontSize: 150,
    color: colors.black,
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: 'transparent'
  }
});