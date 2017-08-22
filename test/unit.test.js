const nodeAndBrowser = [
    '../test_tmp/unit/init.test.js',
    '../test_tmp/unit/util.test.js',
    '../test_tmp/unit/PouchDB-integration.test.js',
    '../test_tmp/unit/RxBroadcastChannel.test.js',
    '../test_tmp/unit/InstanceOfCheck.test.js',
    '../test_tmp/unit/RxSchema.test.js',
    '../test_tmp/unit/KeyCompression.test.js',
    '../test_tmp/unit/Socket.test.js',
    '../test_tmp/unit/RxDatabase.test.js',
    '../test_tmp/unit/RxCollection.test.js',
    '../test_tmp/unit/RxDocument.test.js',
    '../test_tmp/unit/TemporaryDocument.test.js',
    '../test_tmp/unit/ChangeEventBuffer.test.js',
    '../test_tmp/unit/RxQuery.test.js',
    '../test_tmp/unit/QueryChangeDetector.test.js',
    '../test_tmp/unit/Reactive-Database.test.js',
    '../test_tmp/unit/Reactive-Collection.test.js',
    '../test_tmp/unit/Reactive-Query.test.js',
    '../test_tmp/unit/Reactive-Document.test.js',
    '../test_tmp/unit/Primary.test.js',
    '../test_tmp/unit/Hooks.test.js',
    '../test_tmp/unit/ORM.test.js',
    '../test_tmp/unit/Population.test.js',
    '../test_tmp/unit/DataMigration.test.js',
    '../test_tmp/unit/LeaderElection.test.js',
    '../test_tmp/unit/Replication.test.js',
    '../test_tmp/unit/Encryption.test.js',
    '../test_tmp/unit/ImportExport.test.js',
    '../test_tmp/unit/CrossInstance.test.js',
    '../test_tmp/unit/mod_encryption.test.js'
];

const nodeOnly = [
    '../test_tmp/unit/Plugin.test.js'
];

module.exports = {
    browser: nodeAndBrowser,
    all: nodeAndBrowser.concat(nodeOnly)
};
