/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["mattns/invoices/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
