import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { BasePage, BasePageProps, BaseComponent } from 'xrn-common';
import LinearGradient from 'react-native-linear-gradient';

class Block_0 extends BaseComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={styles.list1V2}>
        <View style={styles.primary}>
          <Text style={styles.tag}>王者</Text>
          <ImageBackground
            style={styles.wrapper}
            source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1b6ee3f072d711eca760cfc3a72f67bb.png' }}
          >
            <Text style={styles.label}>质量 34 </Text>
            <View style={styles.wrapperInner}>
              <Image
                style={styles.iconDown}
                source={{
                  uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/18390d5072d711eca836e7bad9cb5a25.png',
                }}
              />
              <Image
                style={styles.iconRight}
                source={{
                  uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1803575072d711eca01c6d22ad7572aa.png',
                }}
              />
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.wrapper1}
            source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1bc36c9072d711ecab3df70f18487b7e.png' }}
          >
            <Image
              style={styles.entryPic}
              source={{
                uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1ac1db1072d711ec940a213ecfe882b6.png',
              }}
            />
            <View style={styles.wrapperInner1}>
              <Text style={styles.word}>当前战力值 88</Text>
              <View style={styles.group}>
                <Image
                  style={styles.iconDown1}
                  source={{
                    uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1878d57072d711eca760cfc3a72f67bb.png',
                  }}
                />
                <Image
                  style={styles.iconRight1}
                  source={{
                    uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1803f39072d711ec8d8d4f4b860035e9.png',
                  }}
                />
              </View>
            </View>
            <View style={styles.wrapperInner2}>
              <View style={styles.groupI0}>
                <Text style={styles.tag1}>业务 28</Text>
                <View style={styles.iconDownWrapper}>
                  <Image
                    style={styles.iconDown2}
                    source={{
                      uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1838711072d711ec940a213ecfe882b6.png',
                    }}
                  />
                  <Image
                    style={styles.iconRight2}
                    source={{
                      uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1803093072d711ec8f5aa7833a533a1b.png',
                    }}
                  />
                </View>
              </View>
              <View style={styles.groupI1}>
                <Text style={styles.label1}>行政 26</Text>
                <View style={styles.iconDownWrapper1}>
                  <Image
                    style={styles.iconDown3}
                    source={{
                      uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1878ae6072d711ecbb5559fcd7d0090f.png',
                    }}
                  />
                  <Image
                    style={styles.iconRight3}
                    source={{
                      uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/18026cf072d711ecb3532bb20dbce950.png',
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.wrapperInner3}>
              <View style={styles.tagWrapper}>
                <Text style={styles.tag2}>黄金</Text>
              </View>
              <Text style={styles.word1} numberOfLines={2}>
                钻石
              </Text>
            </View>
          </ImageBackground>
          <Image
            style={styles.entryPic1}
            source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1a68225072d711ec8f5aa7833a533a1b.png' }}
          />
          <Image
            style={styles.actionBg}
            source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1b26694072d711eca836e7bad9cb5a25.png' }}
          />
          <ImageBackground
            style={styles.wrapper2}
            source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1b2c5cb072d711ec8d8d4f4b860035e9.png' }}
          >
            <ImageBackground
              style={styles.wrapperInner4}
              source={{
                uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1b01551072d711ec8fb59f2f19ddbcd3.png',
              }}
            >
              <ImageBackground
                style={styles.group1}
                source={{
                  uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1ac86ac072d711ecb3532bb20dbce950.png',
                }}
              >
                <Image
                  style={styles.iconFile}
                  source={{
                    uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1959988072d711eca01c6d22ad7572aa.png',
                  }}
                />
                <Image
                  style={styles.iconChat}
                  source={{
                    uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/196ea72072d711eca760cfc3a72f67bb.png',
                  }}
                />
              </ImageBackground>
            </ImageBackground>
            <Text style={styles.info}>所属赛道：A赛道-755Y</Text>
          </ImageBackground>
          <ImageBackground
            style={styles.wrapper3}
            source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1a3b941072d711eca01c6d22ad7572aa.png' }}
          >
            <Image
              style={styles.iconLeft}
              source={{
                uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/18b4f41072d711ec9cf89fcfc3705db9.png',
              }}
            />
            <Text style={styles.tag3}>我的等级</Text>
            <Text style={styles.rule}>规则与历史</Text>
          </ImageBackground>
          <Image
            style={styles.iconSignal}
            source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1838711072d711ec998df116b6b9614b.png' }}
          />
          <View style={styles.tagWrapper1}>
            <Text style={styles.tag4}>青铜</Text>
          </View>
          <Text style={styles.label2}>白银</Text>
        </View>
        <LinearGradient
          style={styles.containerInner}
          start={{ x: -0.21, y: 0.45 }}
          end={{ x: 1.21, y: 0.55 }}
          colors={['rgba(255,255,255,1.00)', 'rgba(221,169,135,1.00)']}
          locations={[0, 1]}
        >
          <Image
            style={styles.buttonBg}
            source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1a37ea9072d711ec9feae386eeeaaf4f.png' }}
          />
          <Image
            style={styles.actionBg1}
            source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1a2043e072d711eca58b2fc10f97475b.png' }}
          />
          <View style={styles.wrapper4}>
            <Text style={styles.word2}>青铜等级</Text>
            <Text style={styles.tag5}>青铜</Text>
          </View>
          <ImageBackground
            style={styles.wrapper5}
            source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1afb61a072d711ecbb5559fcd7d0090f.png' }}
          >
            <ImageBackground
              style={styles.wrapperInner5}
              source={{
                uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/19f42ad072d711ec8d8d4f4b860035e9.png',
              }}
            >
              <View style={styles.tagWrapper2}>
                <Text style={styles.tag6}>去升级</Text>
              </View>
            </ImageBackground>
            <Text style={styles.label3}>白银</Text>
            <ImageBackground
              style={styles.wrapperInner6}
              source={{
                uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/19b1a39072d711eca836e7bad9cb5a25.png',
              }}
            >
              <LinearGradient
                style={styles.group2}
                start={{ x: 0.5, y: -0.21 }}
                end={{ x: 0.5, y: 1.21 }}
                colors={['rgba(244,219,195,1.00)', 'rgba(237,122,85,1.00)']}
                locations={[0, 1]}
              >
                <View style={styles.iconCircleWrapper}>
                  <Image
                    style={styles.iconCircle}
                    source={{
                      uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/18b6c8d072d711eca58b2fc10f97475b.png',
                    }}
                  />
                </View>
                <View style={styles.view}>
                  <LinearGradient
                    style={styles.empty}
                    start={{ x: -0.21, y: 0.5 }}
                    end={{ x: 1.21, y: 0.5 }}
                    colors={['rgba(255,255,255,0.00)', 'rgba(255,255,255,0.60)', 'rgba(255,255,255,0.00)']}
                    locations={[0, 0.5, 1]}
                  />
                  <Image
                    style={styles.iconDown4}
                    source={{
                      uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1878ae6072d711ec8f5aa7833a533a1b.png',
                    }}
                  />
                </View>
              </LinearGradient>
              <Image
                style={styles.largeIcon}
                source={{
                  uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1995b72072d711ec8fb59f2f19ddbcd3.png',
                }}
              />
            </ImageBackground>
          </ImageBackground>
          <Text style={styles.desc}>战力值提高12分可晋升到钻石</Text>
          <View style={styles.wrapper6}>
            <View style={styles.horizontalLine} />
          </View>
          <View style={styles.tagWrapper3}>
            <Text style={styles.tag7}>当前等级</Text>
          </View>
        </LinearGradient>
        <ImageBackground
          style={styles.containerInner1}
          source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1992a9e072d711ecbb5559fcd7d0090f.png' }}
        >
          <Text style={styles.detail}>战力值提高8分可晋升到钻石</Text>
          <Text style={styles.word3}>白银</Text>
          <Text style={styles.tag8}>白银等级</Text>
        </ImageBackground>
      </View>
    );
  }
}
class Block_1 extends BaseComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={styles.labelWrapper}>
        <Text style={styles.label4}>等级权益</Text>
      </View>
    );
  }
}
class Block_2 extends BaseComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.desc1}>累计1个月等级获得福利权益</Text>
        <View style={styles.primary1}>
          <Text style={styles.word4}>可兑礼物啦</Text>
        </View>
        <View style={styles.containerInner2}>
          <ImageBackground
            style={styles.iconRightWrapper}
            source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1878d57072d711ec8fb59f2f19ddbcd3.png' }}
          >
            <Image
              style={styles.iconRight4}
              source={{
                uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1838bf3072d711ec9feae386eeeaaf4f.png',
              }}
            />
          </ImageBackground>
        </View>
      </View>
    );
  }
}
class Block_3 extends BaseComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={styles.list}>
        <LinearGradient
          style={styles.primaryI0}
          start={{ x: -0.13, y: 0.18 }}
          end={{ x: 1.13, y: 0.82 }}
          colors={['rgba(255,251,241,1.00)', 'rgba(255,245,224,1.00)']}
          locations={[0.04, 1]}
        >
          <Text style={styles.num}>+6</Text>
          <Image
            style={styles.iconMoney}
            source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/196187c072d711ec94bdab47afe932ea.png' }}
          />
          <Text style={styles.meta}>本月获得权益币</Text>
        </LinearGradient>
        <LinearGradient
          style={styles.primaryI1}
          start={{ x: -0.13, y: 0.18 }}
          end={{ x: 1.13, y: 0.82 }}
          colors={['rgba(255,251,241,1.00)', 'rgba(255,245,224,1.00)']}
          locations={[0.04, 1]}
        >
          <Text style={styles.num1}>38</Text>
          <ImageBackground
            style={styles.wrapper7}
            source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1962240072d711ec940a213ecfe882b6.png' }}
          >
            <ImageBackground
              style={styles.wrapperInner7}
              source={{
                uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/18be1bd072d711ecab3df70f18487b7e.png',
              }}
            >
              <LinearGradient
                style={styles.empty1}
                start={{ x: 0.5, y: -0.21 }}
                end={{ x: 0.5, y: 1.21 }}
                colors={['rgba(247,208,139,0.40)', 'rgba(248,199,99,0.40)']}
                locations={[0, 1]}
              />
              <LinearGradient
                style={styles.empty2}
                start={{ x: 0.5, y: -0.21 }}
                end={{ x: 0.5, y: 1.21 }}
                colors={['rgba(247,208,139,0.40)', 'rgba(248,199,99,0.40)']}
                locations={[0, 1]}
              />
              <LinearGradient
                style={styles.empty3}
                start={{ x: 0.5, y: -0.21 }}
                end={{ x: 0.5, y: 1.21 }}
                colors={['rgba(247,208,139,0.40)', 'rgba(248,199,99,0.40)']}
                locations={[0, 1]}
              />
            </ImageBackground>
          </ImageBackground>
          <Text style={styles.tag9}>权益币总数</Text>
        </LinearGradient>
      </View>
    );
  }
}
class Block_4 extends BaseComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={styles.subtitleWrapper}>
        <Text style={styles.subtitle}>累计3个月等级获得权益</Text>
      </View>
    );
  }
}
class Block_5 extends BaseComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container1}>
        <Image
          style={styles.iconAvatar}
          source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/18bf7b6072d711ec998df116b6b9614b.png' }}
        />
        <Image
          style={styles.iconLogo}
          source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/18f160d072d711eca836e7bad9cb5a25.png' }}
        />
        <Image
          style={styles.iconAvatar1}
          source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/1908925072d711ec8d8d4f4b860035e9.png' }}
        />
      </View>
    );
  }
}
class Block_6 extends BaseComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container2}>
        <Text style={styles.label5}>跨区调动</Text>
        <Text style={styles.word5}>区域竞投</Text>
        <Text style={styles.tag10}>师傅浮出</Text>
      </View>
    );
  }
}
class Block_7 extends BaseComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={styles.infoWrapper}>
        <Text style={styles.info1}>累计6个月等级获得权益</Text>
      </View>
    );
  }
}
class Block_8 extends BaseComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container3}>
        <Image
          style={styles.iconGuard}
          source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/191dc80072d711ecb3532bb20dbce950.png' }}
        />
        <Image
          style={styles.iconAvatar2}
          source={{ uri: 'https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/193595c072d711ec9feae386eeeaaf4f.png' }}
        />
      </View>
    );
  }
}
class Block_9 extends BaseComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container4}>
        <Text style={styles.label6}>客诉免责</Text>
        <Text style={styles.word6}>人才浮出</Text>
      </View>
    );
  }
}
export default class Page_0 extends BasePage<BasePageProps, {}> {
  constructor(props: BasePageProps) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.page}>
          <Block_0 />
          <Block_1 />
          <Block_2 />
          <Block_3 />
          <Block_4 />
          <Block_5 />
          <Block_6 />
          <Block_7 />
          <Block_8 />
          <Block_9 />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  page: { alignItems: 'flex-start', backgroundColor: '#ffffff', width: rpx(375), height: rpx(963), overflow: 'hidden' },
  list1V2: { position: 'relative', alignItems: 'flex-start', flexDirection: 'row', height: rpx(440) },
  primary: {
    position: 'relative',
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#282B30',
    width: rpx(375),
    overflow: 'hidden',
  },
  tag: {
    position: 'absolute',
    top: rpx(238),
    right: rpx(24),
    lineHeight: rpx(20),
    color: '#ffffff',
    fontSize: rpx(14),
  },
  wrapper: { position: 'relative', alignItems: 'flex-start', flexDirection: 'row', width: rpx(247), height: rpx(338) },
  label: { marginTop: rpx(149), marginRight: rpx(4), marginLeft: rpx(26), color: '#ffffff', fontSize: rpx(16) },
  wrapperInner: {
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: rpx(152),
    width: rpx(16),
  },
  iconDown: { position: 'absolute', top: rpx(0), left: rpx(0), width: rpx(16), height: rpx(16) },
  iconRight: { position: 'relative', marginTop: rpx(2), marginLeft: rpx(-2), width: rpx(14), height: rpx(14) },
  wrapper1: {
    position: 'absolute',
    top: rpx(0),
    right: rpx(0),
    alignItems: 'flex-start',
    width: rpx(264),
    height: rpx(338),
  },
  entryPic: { position: 'relative', alignSelf: 'flex-end', width: rpx(184), height: rpx(103) },
  wrapperInner1: {
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: rpx(1),
    marginLeft: rpx(25),
    height: rpx(25),
  },
  word: { marginRight: rpx(3), letterSpacing: 0, color: '#ffffff', fontSize: rpx(18), fontWeight: '500' },
  group: { position: 'relative', alignItems: 'center', flexDirection: 'row', marginTop: rpx(1), width: rpx(17) },
  iconDown1: { position: 'absolute', top: rpx(0), left: rpx(0), width: rpx(17), height: rpx(16) },
  iconRight1: { position: 'relative', marginTop: rpx(2), marginLeft: rpx(-1), width: rpx(14), height: rpx(14) },
  wrapperInner2: {
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: rpx(20),
    marginLeft: rpx(43),
  },
  groupI0: { alignItems: 'center', flexDirection: 'row', marginRight: rpx(54), height: rpx(22) },
  tag1: { marginRight: rpx(3), color: '#ffffff', fontSize: rpx(16) },
  iconDownWrapper: { position: 'relative', alignItems: 'center', flexDirection: 'row', width: rpx(16) },
  iconDown2: { position: 'absolute', top: rpx(0), left: rpx(0), width: rpx(16), height: rpx(16) },
  iconRight2: { position: 'relative', marginTop: rpx(2), marginLeft: rpx(-2), width: rpx(14), height: rpx(14) },
  groupI1: { alignItems: 'center', flexDirection: 'row', height: rpx(22) },
  label1: { marginRight: rpx(2), color: '#ffffff', fontSize: rpx(16) },
  iconDownWrapper1: { position: 'relative', alignItems: 'center', flexDirection: 'row', width: rpx(17) },
  iconDown3: { position: 'absolute', top: rpx(0), left: rpx(0), width: rpx(17), height: rpx(16) },
  iconRight3: { position: 'relative', marginTop: rpx(2), marginLeft: rpx(-1), width: rpx(14), height: rpx(14) },
  wrapperInner3: {
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: rpx(25),
    marginLeft: rpx(55),
    width: rpx(119),
  },
  tagWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: rpx(2),
    backgroundColor: '#D8A462',
    paddingRight: rpx(8),
    paddingLeft: rpx(8),
    height: rpx(24),
    overflow: 'hidden',
    lineHeight: rpx(19.6),
  },
  tag2: { color: '#ffffff', fontSize: rpx(14) },
  word1: { marginTop: rpx(17), lineHeight: rpx(20), color: '#ffffff', fontSize: rpx(14) },
  entryPic1: { position: 'absolute', top: rpx(0), left: rpx(0), width: rpx(173), height: rpx(103) },
  actionBg: { position: 'absolute', bottom: rpx(19), left: rpx(0), width: rpx(375), height: rpx(84) },
  wrapper2: {
    position: 'absolute',
    bottom: rpx(0),
    left: rpx(0),
    alignItems: 'flex-end',
    flexDirection: 'row',
    height: rpx(90),
  },
  wrapperInner4: { position: 'relative', alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'center' },
  group1: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: rpx(13),
    width: rpx(375),
    height: rpx(61),
  },
  iconFile: { width: rpx(49), height: rpx(58) },
  iconChat: { width: rpx(51), height: rpx(58) },
  info: {
    position: 'absolute',
    top: rpx(10),
    left: rpx(113),
    lineHeight: rpx(20),
    color: '#ffffff',
    fontSize: rpx(14),
  },
  wrapper3: {
    position: 'absolute',
    top: rpx(44),
    left: rpx(0),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: rpx(375),
    height: rpx(44),
  },
  iconLeft: { marginRight: rpx(111), width: rpx(21), height: rpx(20) },
  tag3: {
    marginTop: rpx(-2),
    marginRight: rpx(53),
    letterSpacing: 0,
    color: '#ffffff',
    fontSize: rpx(19),
    fontWeight: '500',
  },
  rule: { color: '#ffffff', fontSize: rpx(16) },
  iconSignal: { position: 'absolute', top: rpx(109), left: rpx(108), width: rpx(16), height: rpx(16) },
  tagWrapper1: {
    position: 'absolute',
    top: rpx(236),
    left: rpx(16),
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: rpx(1),
    borderStyle: 'solid',
    borderRadius: rpx(2),
    borderColor: '#E89D6F',
    paddingRight: rpx(7),
    paddingLeft: rpx(7),
    height: rpx(24),
    overflow: 'hidden',
    lineHeight: rpx(19.6),
  },
  tag4: { color: '#e89d6f', fontSize: rpx(14) },
  label2: {
    position: 'absolute',
    top: rpx(213),
    left: rpx(90),
    lineHeight: rpx(20),
    color: '#ffffff',
    fontSize: rpx(14),
  },
  containerInner: {
    position: 'absolute',
    bottom: rpx(0),
    left: rpx(36),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: rpx(8),
    overflow: 'hidden',
  },
  buttonBg: { position: 'absolute', right: rpx(0), bottom: rpx(0), width: rpx(225), height: rpx(70) },
  actionBg1: { position: 'absolute', right: rpx(60), bottom: rpx(0), width: rpx(163), height: rpx(75) },
  wrapper4: {
    position: 'relative',
    alignItems: 'flex-start',
    marginRight: rpx(46),
    marginLeft: rpx(16),
    fontWeight: '500',
  },
  word2: { position: 'relative', lineHeight: rpx(28), color: '#722d0c', fontSize: rpx(20) },
  tag5: {
    position: 'relative',
    marginTop: rpx(53),
    overflow: 'hidden',
    lineHeight: rpx(17),
    color: '#c47149',
    fontSize: rpx(12),
  },
  wrapper5: { position: 'relative', alignItems: 'flex-end', flexDirection: 'row', height: rpx(146) },
  wrapperInner5: {
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginLeft: rpx(56),
    paddingRight: rpx(20),
    paddingLeft: rpx(25),
    height: rpx(111),
    lineHeight: rpx(19.6),
  },
  tagWrapper2: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: rpx(67),
    borderRadius: rpx(11),
    backgroundColor: 'rgba(0,0,0,0.50)',
    width: rpx(60),
    height: rpx(22),
    overflow: 'hidden',
  },
  tag6: { marginTop: rpx(-1), overflow: 'hidden', color: '#ffffff', fontSize: rpx(12) },
  label3: {
    position: 'absolute',
    top: rpx(105),
    left: rpx(40),
    lineHeight: rpx(17),
    color: '#c47149',
    fontSize: rpx(12),
    fontWeight: '500',
  },
  wrapperInner6: {
    position: 'absolute',
    top: rpx(9),
    right: rpx(7),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: rpx(85),
    height: rpx(89),
  },
  group2: {
    position: 'absolute',
    top: rpx(24),
    left: rpx(22),
    alignItems: 'flex-start',
    borderRadius: rpx(100),
    overflow: 'hidden',
  },
  iconCircleWrapper: { position: 'relative', alignItems: 'center', width: rpx(41), height: rpx(32) },
  iconCircle: { position: 'relative', width: rpx(30), height: rpx(34) },
  view: { position: 'relative', alignItems: 'flex-start', marginTop: rpx(1) },
  empty: { position: 'relative', marginTop: rpx(-1), marginLeft: rpx(1), width: rpx(39), height: rpx(1) },
  iconDown4: { position: 'relative', width: rpx(41), height: rpx(8) },
  largeIcon: { position: 'relative', marginTop: rpx(-1), width: rpx(69), height: rpx(70) },
  desc: { position: 'absolute', top: rpx(84), left: rpx(16), lineHeight: rpx(17), color: '#c47149', fontSize: rpx(12) },
  wrapper6: {
    position: 'absolute',
    top: rpx(111),
    left: rpx(44),
    alignItems: 'flex-start',
    flexDirection: 'row',
    borderRadius: rpx(3),
    backgroundColor: 'rgba(196,113,73,0.50)',
    width: rpx(134),
    overflow: 'hidden',
  },
  horizontalLine: {
    borderRadius: rpx(3),
    backgroundColor: '#C47149',
    width: rpx(45),
    height: rpx(6),
    overflow: 'hidden',
  },
  tagWrapper3: {
    position: 'absolute',
    top: rpx(26),
    left: rpx(104),
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: rpx(1),
    borderStyle: 'solid',
    borderRadius: rpx(2),
    borderColor: '#C47149',
    paddingRight: rpx(7),
    paddingLeft: rpx(7),
    height: rpx(24),
    overflow: 'hidden',
    lineHeight: rpx(19.6),
  },
  tag7: { color: '#c47149', fontSize: rpx(12) },
  containerInner1: {
    position: 'absolute',
    right: rpx(0),
    bottom: rpx(0),
    alignItems: 'center',
    flexDirection: 'row',
    width: rpx(28),
    height: rpx(146),
    overflow: 'hidden',
    fontWeight: '500',
    lineHeight: rpx(19.6),
  },
  detail: { position: 'absolute', top: rpx(84), left: rpx(16), color: '#79828e', fontSize: rpx(12) },
  word3: { position: 'absolute', top: rpx(105), right: rpx(-12), color: '#79828e', fontSize: rpx(12) },
  tag8: { position: 'absolute', top: rpx(24), left: rpx(28), lineHeight: rpx(28), color: '#5a6068', fontSize: rpx(20) },
  labelWrapper: {
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: rpx(26),
    marginLeft: rpx(16),
    fontWeight: '500',
    lineHeight: rpx(25),
  },
  label4: { fontSize: rpx(18) },
  container: {
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: rpx(12),
    width: rpx(344),
    height: rpx(22),
  },
  desc1: { position: 'relative', marginRight: rpx(57), fontSize: rpx(16), fontWeight: '500' },
  primary1: {
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: rpx(83),
    lineHeight: rpx(20),
  },
  word4: { overflow: 'hidden', color: '#ec9162', fontSize: rpx(14) },
  containerInner2: {
    position: 'absolute',
    top: rpx(3),
    right: rpx(0),
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    width: rpx(18),
  },
  iconRightWrapper: { alignItems: 'center', flexDirection: 'row', width: rpx(17) },
  iconRight4: { marginTop: rpx(2), marginLeft: rpx(-1), width: rpx(14), height: rpx(14) },
  list: { position: 'relative', alignItems: 'center', alignSelf: 'center', flexDirection: 'row', marginTop: rpx(12) },
  primaryI0: {
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginRight: rpx(17),
    borderRadius: rpx(8),
    overflow: 'hidden',
  },
  num: {
    position: 'relative',
    marginTop: rpx(14),
    marginRight: rpx(12),
    marginLeft: rpx(68),
    fontSize: rpx(24),
    fontWeight: '500',
  },
  iconMoney: { position: 'relative', marginTop: rpx(26), width: rpx(55), height: rpx(54) },
  meta: {
    position: 'absolute',
    top: rpx(44),
    right: rpx(32),
    lineHeight: rpx(20),
    color: '#999999',
    fontSize: rpx(14),
  },
  primaryI1: {
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'row',
    borderRadius: rpx(8),
    overflow: 'hidden',
  },
  num1: {
    position: 'relative',
    marginTop: rpx(14),
    marginRight: rpx(15),
    marginLeft: rpx(70),
    fontSize: rpx(24),
    fontWeight: '500',
  },
  wrapper7: { position: 'relative', alignItems: 'flex-start', flexDirection: 'row', marginTop: rpx(26) },
  wrapperInner7: { alignItems: 'center', marginTop: rpx(17), marginLeft: rpx(17), width: rpx(38), height: rpx(37) },
  empty1: {
    position: 'relative',
    marginTop: rpx(6),
    borderRadius: rpx(2),
    width: rpx(24),
    height: rpx(4),
    overflow: 'hidden',
  },
  empty2: {
    position: 'relative',
    marginTop: rpx(6),
    borderRadius: rpx(2),
    width: rpx(24),
    height: rpx(4),
    overflow: 'hidden',
  },
  empty3: {
    position: 'relative',
    marginTop: rpx(6),
    borderRadius: rpx(2),
    width: rpx(24),
    height: rpx(4),
    overflow: 'hidden',
  },
  tag9: {
    position: 'absolute',
    top: rpx(44),
    right: rpx(46),
    lineHeight: rpx(20),
    color: '#999999',
    fontSize: rpx(14),
  },
  subtitleWrapper: {
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: rpx(32),
    marginLeft: rpx(16),
    fontWeight: '500',
    lineHeight: rpx(22),
  },
  subtitle: { fontSize: rpx(16) },
  container1: {
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: rpx(12),
  },
  iconAvatar: { marginRight: rpx(75), width: rpx(50), height: rpx(50) },
  iconLogo: { marginRight: rpx(75), width: rpx(50), height: rpx(50) },
  iconAvatar1: { width: rpx(50), height: rpx(50) },
  container2: {
    position: 'relative',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: rpx(8),
    height: rpx(18),
    lineHeight: rpx(19.6),
  },
  label5: { marginRight: rpx(69), fontSize: rpx(14) },
  word5: { marginRight: rpx(69), fontSize: rpx(14) },
  tag10: { fontSize: rpx(14) },
  infoWrapper: {
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: rpx(30),
    marginLeft: rpx(16),
    fontWeight: '500',
    lineHeight: rpx(22),
  },
  info1: { fontSize: rpx(16) },
  container3: {
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: rpx(12),
    marginLeft: rpx(38),
    width: rpx(175),
  },
  iconGuard: { width: rpx(50), height: rpx(50) },
  iconAvatar2: { width: rpx(50), height: rpx(50) },
  container4: {
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: rpx(8),
    marginLeft: rpx(35),
    width: rpx(181),
    height: rpx(18),
    lineHeight: rpx(19.6),
  },
  label6: { fontSize: rpx(14) },
  word6: { fontSize: rpx(14) },
});
