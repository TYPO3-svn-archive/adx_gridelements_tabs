
/**
 * tx_gridelements
 */
tx_gridelements.setup.tx_adxgridelementstabs {

	title = LLL:EXT:adx_gridelements_tabs/Resources/Private/Language/locallang.xlf:title
	description = LLL:EXT:adx_gridelements_tabs/Resources/Private/Language/locallang.xlf:description
	flexformDS = FILE:EXT:adx_gridelements_tabs/Configuration/FlexForm/DS.xml
	icon = EXT:adx_gridelements_tabs/Resources/Public/Icons/24x24/Tabs.gif,EXT:adx_gridelements_tabs/Resources/Public/Icons/16x16/Tabs.gif
	frame = 2

	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = LLL:EXT:adx_gridelements_tabs/Resources/Private/Language/locallang.xlf:columnName.0
						colPos = 0
					}
				}
			}
		}
	}
}