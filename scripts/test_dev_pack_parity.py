import unittest

import audit_dev_pack_parity as audit


class ModrinthPinTests(unittest.TestCase):
    def test_exact_loader_pin_compares_declared_mod_version(self):
        versions = {'configuration': '3.1.0', 'configForgeArtifact': 'h7CBg2Oe'}
        libraries = {'configuration': 'maven.modrinth:3WjjSM5O@ref:configForgeArtifact'}
        self.assertEqual(audit.resolve_pin('forge.configuration', versions, libraries),
                         ('configuration', '3WjjSM5O', '3.1.0'))

    def test_opaque_id_without_a_declared_version_is_preserved(self):
        self.assertEqual(audit.resolve_pin('forge.example', {'example': 'h7CBg2Oe'},
                                         {'example': 'maven.modrinth:project@ref:example'})[2], 'h7CBg2Oe')


if __name__ == '__main__':
    unittest.main()
