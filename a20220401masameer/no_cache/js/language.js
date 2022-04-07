// md 文档里有介绍
var language
var defaultLanguageCode = 'EN'
var GLanguage = {
	'ZH': {
		"lang0": "和saif nabeel一起统治",
		"lang1": "活动规则",
		"lang2": "1. 活动时间：4.3-4.12",
		"lang3": "2. 玩家每日参与经典模式或者团竞模式对局可获得抽奖次数*1，玩家每日分享获得页面可获得抽奖次数*1",
		"lang4": "3. 累计抽奖次数达到1次、5次、8次、12次可分别获得对应道具奖励",
		"lang5": "4. 所获游戏道具奖励将通过邮件发送",
		"lang6": "1. 参与经典模式或团竞模式对局一次",
		"lang7": "2. 分享活动页面一次",
		"lang8": "抽奖机会",
		"lang9": "现有抽奖机会",
		"lang10": "剩余抽奖机会",
		"lang11": "抽奖",
		"lang12": "剩余<span>x</span>次",
		"lang13": "领取",
		"lang14": "已领取",
		"lang15": "去完成",
		"lang16": "立即分享",
		"lang17": "saif nabeel旗舰版语音包*3D",
		"lang18": "saif nabeel加强版语音包*3D",
		"lang19": "saif nabeel基础版语音包*3D",
		"lang20": "金币*100",
		"lang21": "AG*30",
		"lang22": "奖励已发送到您的邮件，请注意查收",
		"lang23": "xx.xx-xx.xx",
		"tips_1": "系统繁忙，请稍后再试",
		"tips_2": "登录失败，请重新登录",
		"tips_3": "操作太频密，请稍后再试",
		"tips_4": "横向查看活动体验更佳",
		"tips_5": "活动已过期",
		"tips_6": "已曾领取这礼包",
		"tips_7": "未满足领取条件"
	},
	'EN': {
		"lang0": "和saif nabeel一起统治",
		"lang1": "活动规则",
		"lang2": "1. 活动时间：4.3-4.12",
		"lang3": "2. 玩家每日参与经典模式或者团竞模式对局可获得抽奖次数*1，玩家每日分享获得页面可获得抽奖次数*1",
		"lang4": "3. 累计抽奖次数达到1次、5次、8次、12次可分别获得对应道具奖励",
		"lang5": "4. 所获游戏道具奖励将通过邮件发送",
		"lang6": "1. 参与经典模式或团竞模式对局一次",
		"lang7": "2. 分享活动页面一次",
		"lang8": "抽奖机会",
		"lang9": "现有抽奖机会",
		"lang10": "剩余抽奖机会",
		"lang11": "抽奖",
		"lang12": "剩余<span>x</span>次",
		"lang13": "领取",
		"lang14": "已领取",
		"lang15": "去完成",
		"lang16": "立即分享",
		"lang17": "saif nabeel旗舰版语音包*3D",
		"lang18": "saif nabeel加强版语音包*3D",
		"lang19": "saif nabeel基础版语音包*3D",
		"lang20": "金币*100",
		"lang21": "AG*30",
		"lang22": "奖励已发送到您的邮件，请注意查收",
		"lang23": "xx.xx-xx.xx",
		"tips_1": "系统繁忙，请稍后再试",
		"tips_2": "登录失败，请重新登录",
		"tips_3": "操作太频密，请稍后再试",
		"tips_4": "横向查看活动体验更佳",
		"tips_5": "活动已过期",
		"tips_6": "已曾领取这礼包",
		"tips_7": "未满足领取条件"
	},
	'RU': {
		"lang0": "和saif nabeel一起统治",
		"lang1": "活动规则",
		"lang2": "1. 活动时间：4.3-4.12",
		"lang3": "2. 玩家每日参与经典模式或者团竞模式对局可获得抽奖次数*1，玩家每日分享获得页面可获得抽奖次数*1",
		"lang4": "3. 累计抽奖次数达到1次、5次、8次、12次可分别获得对应道具奖励",
		"lang5": "4. 所获游戏道具奖励将通过邮件发送",
		"lang6": "1. 参与经典模式或团竞模式对局一次",
		"lang7": "2. 分享活动页面一次",
		"lang8": "抽奖机会",
		"lang9": "现有抽奖机会",
		"lang10": "剩余抽奖机会",
		"lang11": "抽奖",
		"lang12": "剩余<span>x</span>次",
		"lang13": "领取",
		"lang14": "已领取",
		"lang15": "去完成",
		"lang16": "立即分享",
		"lang17": "saif nabeel旗舰版语音包*3D",
		"lang18": "saif nabeel加强版语音包*3D",
		"lang19": "saif nabeel基础版语音包*3D",
		"lang20": "金币*100",
		"lang21": "AG*30",
		"lang22": "奖励已发送到您的邮件，请注意查收",
		"lang23": "xx.xx-xx.xx",
		"tips_1": "系统繁忙，请稍后再试",
		"tips_2": "登录失败，请重新登录",
		"tips_3": "操作太频密，请稍后再试",
		"tips_4": "横向查看活动体验更佳",
		"tips_5": "活动已过期",
		"tips_6": "已曾领取这礼包",
		"tips_7": "未满足领取条件"
	},
	'DE': {
		"lang0": "和saif nabeel一起统治",
		"lang1": "活动规则",
		"lang2": "1. 活动时间：4.3-4.12",
		"lang3": "2. 玩家每日参与经典模式或者团竞模式对局可获得抽奖次数*1，玩家每日分享获得页面可获得抽奖次数*1",
		"lang4": "3. 累计抽奖次数达到1次、5次、8次、12次可分别获得对应道具奖励",
		"lang5": "4. 所获游戏道具奖励将通过邮件发送",
		"lang6": "1. 参与经典模式或团竞模式对局一次",
		"lang7": "2. 分享活动页面一次",
		"lang8": "抽奖机会",
		"lang9": "现有抽奖机会",
		"lang10": "剩余抽奖机会",
		"lang11": "抽奖",
		"lang12": "剩余<span>x</span>次",
		"lang13": "领取",
		"lang14": "已领取",
		"lang15": "去完成",
		"lang16": "立即分享",
		"lang17": "saif nabeel旗舰版语音包*3D",
		"lang18": "saif nabeel加强版语音包*3D",
		"lang19": "saif nabeel基础版语音包*3D",
		"lang20": "金币*100",
		"lang21": "AG*30",
		"lang22": "奖励已发送到您的邮件，请注意查收",
		"lang23": "xx.xx-xx.xx",
		"tips_1": "系统繁忙，请稍后再试",
		"tips_2": "登录失败，请重新登录",
		"tips_3": "操作太频密，请稍后再试",
		"tips_4": "横向查看活动体验更佳",
		"tips_5": "活动已过期",
		"tips_6": "已曾领取这礼包",
		"tips_7": "未满足领取条件"
	},
	'HK': {
		"lang0": "和saif nabeel一起统治",
		"lang1": "活动规则",
		"lang2": "1. 活动时间：4.3-4.12",
		"lang3": "2. 玩家每日参与经典模式或者团竞模式对局可获得抽奖次数*1，玩家每日分享获得页面可获得抽奖次数*1",
		"lang4": "3. 累计抽奖次数达到1次、5次、8次、12次可分别获得对应道具奖励",
		"lang5": "4. 所获游戏道具奖励将通过邮件发送",
		"lang6": "1. 参与经典模式或团竞模式对局一次",
		"lang7": "2. 分享活动页面一次",
		"lang8": "抽奖机会",
		"lang9": "现有抽奖机会",
		"lang10": "剩余抽奖机会",
		"lang11": "抽奖",
		"lang12": "剩余<span>x</span>次",
		"lang13": "领取",
		"lang14": "已领取",
		"lang15": "去完成",
		"lang16": "立即分享",
		"lang17": "saif nabeel旗舰版语音包*3D",
		"lang18": "saif nabeel加强版语音包*3D",
		"lang19": "saif nabeel基础版语音包*3D",
		"lang20": "金币*100",
		"lang21": "AG*30",
		"lang22": "奖励已发送到您的邮件，请注意查收",
		"lang23": "xx.xx-xx.xx",
		"tips_1": "系统繁忙，请稍后再试",
		"tips_2": "登录失败，请重新登录",
		"tips_3": "操作太频密，请稍后再试",
		"tips_4": "横向查看活动体验更佳",
		"tips_5": "活动已过期",
		"tips_6": "已曾领取这礼包",
		"tips_7": "未满足领取条件"
	},
	'TW': {
		"lang0": "和saif nabeel一起统治",
		"lang1": "活动规则",
		"lang2": "1. 活动时间：4.3-4.12",
		"lang3": "2. 玩家每日参与经典模式或者团竞模式对局可获得抽奖次数*1，玩家每日分享获得页面可获得抽奖次数*1",
		"lang4": "3. 累计抽奖次数达到1次、5次、8次、12次可分别获得对应道具奖励",
		"lang5": "4. 所获游戏道具奖励将通过邮件发送",
		"lang6": "1. 参与经典模式或团竞模式对局一次",
		"lang7": "2. 分享活动页面一次",
		"lang8": "抽奖机会",
		"lang9": "现有抽奖机会",
		"lang10": "剩余抽奖机会",
		"lang11": "抽奖",
		"lang12": "剩余<span>x</span>次",
		"lang13": "领取",
		"lang14": "已领取",
		"lang15": "去完成",
		"lang16": "立即分享",
		"lang17": "saif nabeel旗舰版语音包*3D",
		"lang18": "saif nabeel加强版语音包*3D",
		"lang19": "saif nabeel基础版语音包*3D",
		"lang20": "金币*100",
		"lang21": "AG*30",
		"lang22": "奖励已发送到您的邮件，请注意查收",
		"lang23": "xx.xx-xx.xx",
		"tips_1": "系统繁忙，请稍后再试",
		"tips_2": "登录失败，请重新登录",
		"tips_3": "操作太频密，请稍后再试",
		"tips_4": "横向查看活动体验更佳",
		"tips_5": "活动已过期",
		"tips_6": "已曾领取这礼包",
		"tips_7": "未满足领取条件"
	},
	'TH': {
		"lang0": "和saif nabeel一起统治",
		"lang1": "活动规则",
		"lang2": "1. 活动时间：4.3-4.12",
		"lang3": "2. 玩家每日参与经典模式或者团竞模式对局可获得抽奖次数*1，玩家每日分享获得页面可获得抽奖次数*1",
		"lang4": "3. 累计抽奖次数达到1次、5次、8次、12次可分别获得对应道具奖励",
		"lang5": "4. 所获游戏道具奖励将通过邮件发送",
		"lang6": "1. 参与经典模式或团竞模式对局一次",
		"lang7": "2. 分享活动页面一次",
		"lang8": "抽奖机会",
		"lang9": "现有抽奖机会",
		"lang10": "剩余抽奖机会",
		"lang11": "抽奖",
		"lang12": "剩余<span>x</span>次",
		"lang13": "领取",
		"lang14": "已领取",
		"lang15": "去完成",
		"lang16": "立即分享",
		"lang17": "saif nabeel旗舰版语音包*3D",
		"lang18": "saif nabeel加强版语音包*3D",
		"lang19": "saif nabeel基础版语音包*3D",
		"lang20": "金币*100",
		"lang21": "AG*30",
		"lang22": "奖励已发送到您的邮件，请注意查收",
		"lang23": "xx.xx-xx.xx",
		"tips_1": "系统繁忙，请稍后再试",
		"tips_2": "登录失败，请重新登录",
		"tips_3": "操作太频密，请稍后再试",
		"tips_4": "横向查看活动体验更佳",
		"tips_5": "活动已过期",
		"tips_6": "已曾领取这礼包",
		"tips_7": "未满足领取条件"
	},
	'VI': {
		"lang0": "和saif nabeel一起统治",
		"lang1": "活动规则",
		"lang2": "1. 活动时间：4.3-4.12",
		"lang3": "2. 玩家每日参与经典模式或者团竞模式对局可获得抽奖次数*1，玩家每日分享获得页面可获得抽奖次数*1",
		"lang4": "3. 累计抽奖次数达到1次、5次、8次、12次可分别获得对应道具奖励",
		"lang5": "4. 所获游戏道具奖励将通过邮件发送",
		"lang6": "1. 参与经典模式或团竞模式对局一次",
		"lang7": "2. 分享活动页面一次",
		"lang8": "抽奖机会",
		"lang9": "现有抽奖机会",
		"lang10": "剩余抽奖机会",
		"lang11": "抽奖",
		"lang12": "剩余<span>x</span>次",
		"lang13": "领取",
		"lang14": "已领取",
		"lang15": "去完成",
		"lang16": "立即分享",
		"lang17": "saif nabeel旗舰版语音包*3D",
		"lang18": "saif nabeel加强版语音包*3D",
		"lang19": "saif nabeel基础版语音包*3D",
		"lang20": "金币*100",
		"lang21": "AG*30",
		"lang22": "奖励已发送到您的邮件，请注意查收",
		"lang23": "xx.xx-xx.xx",
		"tips_1": "系统繁忙，请稍后再试",
		"tips_2": "登录失败，请重新登录",
		"tips_3": "操作太频密，请稍后再试",
		"tips_4": "横向查看活动体验更佳",
		"tips_5": "活动已过期",
		"tips_6": "已曾领取这礼包",
		"tips_7": "未满足领取条件"
	},
	'ID': {
		"lang0": "和saif nabeel一起统治",
		"lang1": "活动规则",
		"lang2": "1. 活动时间：4.3-4.12",
		"lang3": "2. 玩家每日参与经典模式或者团竞模式对局可获得抽奖次数*1，玩家每日分享获得页面可获得抽奖次数*1",
		"lang4": "3. 累计抽奖次数达到1次、5次、8次、12次可分别获得对应道具奖励",
		"lang5": "4. 所获游戏道具奖励将通过邮件发送",
		"lang6": "1. 参与经典模式或团竞模式对局一次",
		"lang7": "2. 分享活动页面一次",
		"lang8": "抽奖机会",
		"lang9": "现有抽奖机会",
		"lang10": "剩余抽奖机会",
		"lang11": "抽奖",
		"lang12": "剩余<span>x</span>次",
		"lang13": "领取",
		"lang14": "已领取",
		"lang15": "去完成",
		"lang16": "立即分享",
		"lang17": "saif nabeel旗舰版语音包*3D",
		"lang18": "saif nabeel加强版语音包*3D",
		"lang19": "saif nabeel基础版语音包*3D",
		"lang20": "金币*100",
		"lang21": "AG*30",
		"lang22": "奖励已发送到您的邮件，请注意查收",
		"lang23": "xx.xx-xx.xx",
		"tips_1": "系统繁忙，请稍后再试",
		"tips_2": "登录失败，请重新登录",
		"tips_3": "操作太频密，请稍后再试",
		"tips_4": "横向查看活动体验更佳",
		"tips_5": "活动已过期",
		"tips_6": "已曾领取这礼包",
		"tips_7": "未满足领取条件"
	},
	'PT': {
		"lang0": "和saif nabeel一起统治",
		"lang1": "活动规则",
		"lang2": "1. 活动时间：4.3-4.12",
		"lang3": "2. 玩家每日参与经典模式或者团竞模式对局可获得抽奖次数*1，玩家每日分享获得页面可获得抽奖次数*1",
		"lang4": "3. 累计抽奖次数达到1次、5次、8次、12次可分别获得对应道具奖励",
		"lang5": "4. 所获游戏道具奖励将通过邮件发送",
		"lang6": "1. 参与经典模式或团竞模式对局一次",
		"lang7": "2. 分享活动页面一次",
		"lang8": "抽奖机会",
		"lang9": "现有抽奖机会",
		"lang10": "剩余抽奖机会",
		"lang11": "抽奖",
		"lang12": "剩余<span>x</span>次",
		"lang13": "领取",
		"lang14": "已领取",
		"lang15": "去完成",
		"lang16": "立即分享",
		"lang17": "saif nabeel旗舰版语音包*3D",
		"lang18": "saif nabeel加强版语音包*3D",
		"lang19": "saif nabeel基础版语音包*3D",
		"lang20": "金币*100",
		"lang21": "AG*30",
		"lang22": "奖励已发送到您的邮件，请注意查收",
		"lang23": "xx.xx-xx.xx",
		"tips_1": "系统繁忙，请稍后再试",
		"tips_2": "登录失败，请重新登录",
		"tips_3": "操作太频密，请稍后再试",
		"tips_4": "横向查看活动体验更佳",
		"tips_5": "活动已过期",
		"tips_6": "已曾领取这礼包",
		"tips_7": "未满足领取条件"
	},
	'FR': {
		"lang0": "和saif nabeel一起统治",
		"lang1": "活动规则",
		"lang2": "1. 活动时间：4.3-4.12",
		"lang3": "2. 玩家每日参与经典模式或者团竞模式对局可获得抽奖次数*1，玩家每日分享获得页面可获得抽奖次数*1",
		"lang4": "3. 累计抽奖次数达到1次、5次、8次、12次可分别获得对应道具奖励",
		"lang5": "4. 所获游戏道具奖励将通过邮件发送",
		"lang6": "1. 参与经典模式或团竞模式对局一次",
		"lang7": "2. 分享活动页面一次",
		"lang8": "抽奖机会",
		"lang9": "现有抽奖机会",
		"lang10": "剩余抽奖机会",
		"lang11": "抽奖",
		"lang12": "剩余<span>x</span>次",
		"lang13": "领取",
		"lang14": "已领取",
		"lang15": "去完成",
		"lang16": "立即分享",
		"lang17": "saif nabeel旗舰版语音包*3D",
		"lang18": "saif nabeel加强版语音包*3D",
		"lang19": "saif nabeel基础版语音包*3D",
		"lang20": "金币*100",
		"lang21": "AG*30",
		"lang22": "奖励已发送到您的邮件，请注意查收",
		"lang23": "xx.xx-xx.xx",
		"tips_1": "系统繁忙，请稍后再试",
		"tips_2": "登录失败，请重新登录",
		"tips_3": "操作太频密，请稍后再试",
		"tips_4": "横向查看活动体验更佳",
		"tips_5": "活动已过期",
		"tips_6": "已曾领取这礼包",
		"tips_7": "未满足领取条件"
	},
	'ES': {
		"lang0": "和saif nabeel一起统治",
		"lang1": "活动规则",
		"lang2": "1. 活动时间：4.3-4.12",
		"lang3": "2. 玩家每日参与经典模式或者团竞模式对局可获得抽奖次数*1，玩家每日分享获得页面可获得抽奖次数*1",
		"lang4": "3. 累计抽奖次数达到1次、5次、8次、12次可分别获得对应道具奖励",
		"lang5": "4. 所获游戏道具奖励将通过邮件发送",
		"lang6": "1. 参与经典模式或团竞模式对局一次",
		"lang7": "2. 分享活动页面一次",
		"lang8": "抽奖机会",
		"lang9": "现有抽奖机会",
		"lang10": "剩余抽奖机会",
		"lang11": "抽奖",
		"lang12": "剩余<span>x</span>次",
		"lang13": "领取",
		"lang14": "已领取",
		"lang15": "去完成",
		"lang16": "立即分享",
		"lang17": "saif nabeel旗舰版语音包*3D",
		"lang18": "saif nabeel加强版语音包*3D",
		"lang19": "saif nabeel基础版语音包*3D",
		"lang20": "金币*100",
		"lang21": "AG*30",
		"lang22": "奖励已发送到您的邮件，请注意查收",
		"lang23": "xx.xx-xx.xx",
		"tips_1": "系统繁忙，请稍后再试",
		"tips_2": "登录失败，请重新登录",
		"tips_3": "操作太频密，请稍后再试",
		"tips_4": "横向查看活动体验更佳",
		"tips_5": "活动已过期",
		"tips_6": "已曾领取这礼包",
		"tips_7": "未满足领取条件"
	},
	'TR': {
		"lang0": "和saif nabeel一起统治",
		"lang1": "活动规则",
		"lang2": "1. 活动时间：4.3-4.12",
		"lang3": "2. 玩家每日参与经典模式或者团竞模式对局可获得抽奖次数*1，玩家每日分享获得页面可获得抽奖次数*1",
		"lang4": "3. 累计抽奖次数达到1次、5次、8次、12次可分别获得对应道具奖励",
		"lang5": "4. 所获游戏道具奖励将通过邮件发送",
		"lang6": "1. 参与经典模式或团竞模式对局一次",
		"lang7": "2. 分享活动页面一次",
		"lang8": "抽奖机会",
		"lang9": "现有抽奖机会",
		"lang10": "剩余抽奖机会",
		"lang11": "抽奖",
		"lang12": "剩余<span>x</span>次",
		"lang13": "领取",
		"lang14": "已领取",
		"lang15": "去完成",
		"lang16": "立即分享",
		"lang17": "saif nabeel旗舰版语音包*3D",
		"lang18": "saif nabeel加强版语音包*3D",
		"lang19": "saif nabeel基础版语音包*3D",
		"lang20": "金币*100",
		"lang21": "AG*30",
		"lang22": "奖励已发送到您的邮件，请注意查收",
		"lang23": "xx.xx-xx.xx",
		"tips_1": "系统繁忙，请稍后再试",
		"tips_2": "登录失败，请重新登录",
		"tips_3": "操作太频密，请稍后再试",
		"tips_4": "横向查看活动体验更佳",
		"tips_5": "活动已过期",
		"tips_6": "已曾领取这礼包",
		"tips_7": "未满足领取条件"
	},
	'AR': {
		"lang0": "和saif nabeel一起统治",
		"lang1": "活动规则",
		"lang2": "1. 活动时间：4.3-4.12",
		"lang3": "2. 玩家每日参与经典模式或者团竞模式对局可获得抽奖次数*1，玩家每日分享获得页面可获得抽奖次数*1",
		"lang4": "3. 累计抽奖次数达到1次、5次、8次、12次可分别获得对应道具奖励",
		"lang5": "4. 所获游戏道具奖励将通过邮件发送",
		"lang6": "1. 参与经典模式或团竞模式对局一次",
		"lang7": "2. 分享活动页面一次",
		"lang8": "抽奖机会",
		"lang9": "现有抽奖机会",
		"lang10": "剩余抽奖机会",
		"lang11": "抽奖",
		"lang12": "剩余<span>x</span>次",
		"lang13": "领取",
		"lang14": "已领取",
		"lang15": "去完成",
		"lang16": "立即分享",
		"lang17": "saif nabeel旗舰版语音包*3D",
		"lang18": "saif nabeel加强版语音包*3D",
		"lang19": "saif nabeel基础版语音包*3D",
		"lang20": "金币*100",
		"lang21": "AG*30",
		"lang22": "奖励已发送到您的邮件，请注意查收",
		"lang23": "xx.xx-xx.xx",
		"tips_1": "系统繁忙，请稍后再试",
		"tips_2": "登录失败，请重新登录",
		"tips_3": "操作太频密，请稍后再试",
		"tips_4": "横向查看活动体验更佳",
		"tips_5": "活动已过期",
		"tips_6": "已曾领取这礼包",
		"tips_7": "未满足领取条件"
	},
	'MS': {
		"lang0": "和saif nabeel一起统治",
		"lang1": "活动规则",
		"lang2": "1. 活动时间：4.3-4.12",
		"lang3": "2. 玩家每日参与经典模式或者团竞模式对局可获得抽奖次数*1，玩家每日分享获得页面可获得抽奖次数*1",
		"lang4": "3. 累计抽奖次数达到1次、5次、8次、12次可分别获得对应道具奖励",
		"lang5": "4. 所获游戏道具奖励将通过邮件发送",
		"lang6": "1. 参与经典模式或团竞模式对局一次",
		"lang7": "2. 分享活动页面一次",
		"lang8": "抽奖机会",
		"lang9": "现有抽奖机会",
		"lang10": "剩余抽奖机会",
		"lang11": "抽奖",
		"lang12": "剩余<span>x</span>次",
		"lang13": "领取",
		"lang14": "已领取",
		"lang15": "去完成",
		"lang16": "立即分享",
		"lang17": "saif nabeel旗舰版语音包*3D",
		"lang18": "saif nabeel加强版语音包*3D",
		"lang19": "saif nabeel基础版语音包*3D",
		"lang20": "金币*100",
		"lang21": "AG*30",
		"lang22": "奖励已发送到您的邮件，请注意查收",
		"lang23": "xx.xx-xx.xx",
		"tips_1": "系统繁忙，请稍后再试",
		"tips_2": "登录失败，请重新登录",
		"tips_3": "操作太频密，请稍后再试",
		"tips_4": "横向查看活动体验更佳",
		"tips_5": "活动已过期",
		"tips_6": "已曾领取这礼包",
		"tips_7": "未满足领取条件"
	},
}

var language = 'EN'

function isEmpty(val) {
	return val == null || val == '' || val == undefined
}
var langObj = null
var areaLan = ['ZH', 'EN', 'RU', 'DE', 'HK', 'TW', 'TH', 'VI', 'ID', 'PT', 'FR', 'ES', 'TR', 'AR', 'MS']
var queryString = $.trim(getQueryString('language'))
if (!isEmpty(queryString)) {
	queryString = queryString.toUpperCase()
}
if (areaLan.indexOf(queryString) < 0) {
	language = 'EN'
} else {
	language = queryString
}
if (language == 'EN') {
	$('body').addClass('lang_en')
} else {
	$('body').removeClass('lang_en')
}
if (language == 'ZH') {
	$('body').addClass('lang_zh')
} else {
	$('body').removeClass('lang_zh')
}
if (language == 'RU') {
	$('body').addClass('lang_ru')
} else {
	$('body').removeClass('lang_ru')
}
if (language == 'DE') {
	$('body').addClass('lang_de')
} else {
	$('body').removeClass('lang_de')
}
if (language == 'HK') {
	$('body').addClass('lang_hk')
} else {
	$('body').removeClass('lang_hk')
}
if (language == 'TW') {
	$('body').addClass('lang_tw')
} else {
	$('body').removeClass('lang_tw')
}
if (language == 'TH') {
	$('body').addClass('lang_th')
} else {
	$('body').removeClass('lang_th')
}
if (language == 'VI') {
	$('body').addClass('lang_vi')
} else {
	$('body').removeClass('lang_vi')
}
if (language == 'ID') {
	$('body').addClass('lang_id')
} else {
	$('body').removeClass('lang_id')
}
if (language == 'PT') {
	$('body').addClass('lang_pt')
} else {
	$('body').removeClass('lang_pt')
}
if (language == 'FR') {
	$('body').addClass('lang_fr')
} else {
	$('body').removeClass('lang_fr')
}
if (language == 'ES') {
	$('body').addClass('lang_es')
} else {
	$('body').removeClass('lang_es')
}
if (language == 'TR') {
	$('body').addClass('lang_tr')
} else {
	$('body').removeClass('lang_tr')
}
if (language == 'AR') {
	$('body').addClass('lang_ar')
} else {
	$('body').removeClass('lang_ar')
}
if (language == 'MS') {
	$('body').addClass('lang_my')
} else {
	$('body').removeClass('lang_my')
}
// ['EN', 'RU', 'DE', 'HK', 'TW', 'TH', 'VI', 'ID', 'PT', 'FR', 'ES', 'TR', 'AR', 'MS']

langObj = GLanguage[language]
document.title = GLanguage[language]['lang0']
initLang(langObj)

function initLang(obj) {
	$('[data-lang]').each(function(index) {
		var texts = $(this).attr('data-lang')
		// $(this).text(obj[texts]);
		$(this).html(obj[texts])
	})
}

function getQueryString(name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
	var reg_rewrite = new RegExp('(^|/)' + name + '/([^/]*)(/|$)', 'i')
	var r = window.location.search.substr(1).match(reg)
	var q = window.location.pathname.substr(1).match(reg_rewrite)
	if (r != null) {
		return unescape(r[2])
	} else if (q != null) {
		return unescape(q[2])
	} else {
		return ''
	}
}